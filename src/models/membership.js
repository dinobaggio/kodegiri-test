'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Membership.init(
    {
      member_no: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      birth_date: DataTypes.STRING,
      address: DataTypes.STRING,
      join_date: DataTypes.STRING,
      referral: DataTypes.STRING,
      earned_point: DataTypes.INTEGER,
      redeemed_point: DataTypes.INTEGER,
      remained_point: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Membership',
      underscored: true,
      tableName: 'memberships',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return Membership
}
