'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class LoyaltyBenefit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }

  LoyaltyBenefit.init(
    {
      policy_id: DataTypes.INTEGER,
      policy_name: DataTypes.STRING,
      benefit_name: DataTypes.STRING,
      type: DataTypes.STRING,
      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'LoyaltyBenefit',
      underscored: true,
      tableName: 'loyalty_benefits',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return LoyaltyBenefit
}
