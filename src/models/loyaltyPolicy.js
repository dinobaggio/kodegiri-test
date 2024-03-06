'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class LoyaltyPolicy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  LoyaltyPolicy.init(
    {
      policy_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'LoyaltyPolicy',
      underscored: true,
      tableName: 'loyalty_policies',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return LoyaltyPolicy
}
