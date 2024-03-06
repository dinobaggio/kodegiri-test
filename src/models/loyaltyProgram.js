'use strict'
const { Model } = require('sequelize')
const { GenerateInvoiceNumber } = require('../libs')
const { BENEFIT, TYPE_POIN } = require('../constants')

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
      this.GetMember = async function (memberReferral) {
        const { Transaction, HistoryPoint, Membership } = models
        const loyaltyProgram = await this.findOne({
          where: {
            ['$benefit.benefit_name$']: BENEFIT.MEMBER_GET_MEMBER,
          },
          include: [
            {
              association: 'policy',
            },
            {
              association: 'benefit',
            },
          ],
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
