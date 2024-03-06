'use strict'
const { Model, Op } = require('sequelize')
const { GenerateInvoiceNumber } = require('../libs')
const {
  BENEFIT,
  TYPE_POIN,
  TYPE_COMMUNITY,
  TYPE_BENEFIT,
} = require('../constants')

module.exports = (sequelize, DataTypes) => {
  class LoyaltyProgram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.LoyaltyPolicy, {
        as: 'policy',
        sourceKey: 'policy_id',
        foreignKey: 'id',
      })
      this.hasOne(models.LoyaltyBenefit, {
        as: 'benefit',
        sourceKey: 'benefit_id',
        foreignKey: 'id',
      })

      this.GetMember = async function (memberReferral, person) {
        const { Transaction, HistoryPoint, Membership, Community } = models
        const loyaltyProgram = await this.findOne({
          where: {
            benefit_name: BENEFIT.MEMBER_GET_MEMBER,
          },
          include: {
            association: 'benefit',
          },
        })
        if (!loyaltyProgram) {
          throw new Error('Internal server error')
        }
        const { value } = loyaltyProgram.benefit

        const txLastId = await Transaction.max('id')
        const txPrefix = 'TRMGM'
        const txId = GenerateInvoiceNumber(txLastId + 1, txPrefix)

        await Transaction.create({
          transaction_id: txId,
          prefix_id: txPrefix,
          transaction_date: new Date(),
          member_no: memberReferral.id,
          name: memberReferral.name,
          phone_no: memberReferral.phone_no,
          email: memberReferral.email,
        })
        await HistoryPoint.create({
          transaction_id: txId,
          member_no: memberReferral.id,
          transaction_date: new Date(),
          type: TYPE_POIN.EARNED,
          loyalty_name: loyaltyProgram.loyalty_name,
          loyalty_id: loyaltyProgram.id,
          existing_poin: memberReferral.remained_point,
          earned_poin: value,
          balance_poin: memberReferral.remained_point + value,
        })
        await Membership.update(
          {
            earned_point: memberReferral.earned_point + value,
            remained_point: memberReferral.remained_point + value,
          },
          {
            where: { id: memberReferral.id },
          },
        )
        await Community.create({
          type: TYPE_COMMUNITY.MEMBER_GET_MEMBER,
          member_no: memberReferral.id,
          name: memberReferral.name,
          phone_no: memberReferral.phone_no,
          email: memberReferral.email,
          transaction_id: txId,
          transaction_date: new Date(),
          persons: JSON.stringify(person),
        })
      }

      this.FirstPurchase = async function (total_amount, member, txId) {
        const { HistoryPoint, Membership } = models
        let programs = await this.findAll({
          include: { association: 'benefit' },
          where: {
            benefit_name: {
              [Op.like]: 'first_purchase%',
            },
          },
        })
        for (let i = 0; i < programs.length; i++) {
          const { benefit } = programs[i]
          if (benefit.type === TYPE_BENEFIT.PERCENTAGE) {
            total_amount -= (total_amount / 100) * benefit.value
            await HistoryPoint.create({
              transaction_id: txId,
              member_no: member.id,
              transaction_date: new Date(),
              type: TYPE_POIN.REDEEMED,
              loyalty_name: programs[i].loyalty_name,
              loyalty_id: programs[i].id,
              existing_poin: member.remained_point,
              earned_poin: 0,
              balance_poin: member.remained_point,
            })
          } else {
            await HistoryPoint.create({
              transaction_id: txId,
              member_no: member.id,
              transaction_date: new Date(),
              type: TYPE_POIN.EARNED,
              loyalty_name: programs[i].loyalty_name,
              loyalty_id: programs[i].id,
              existing_poin: member.remained_point,
              earned_poin: benefit.value,
              balance_poin: member.remained_point + benefit.value,
            })
            await Membership.update(
              {
                earned_point: member.earned_point + benefit.value,
                remained_point: member.remained_point + benefit.value,
              },
              {
                where: { id: member.id },
              },
            )
          }
        }

        return { total_amount }
      }
    }
  }
  LoyaltyProgram.init(
    {
      loyalty_name: DataTypes.STRING,
      tier_name: DataTypes.STRING,
      tier_id: DataTypes.INTEGER,
      policy_name: DataTypes.STRING,
      policy_id: DataTypes.INTEGER,
      benefit_name: DataTypes.STRING,
      benefit_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'LoyaltyProgram',
      underscored: true,
      tableName: 'loyalty_programs',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return LoyaltyProgram
}
