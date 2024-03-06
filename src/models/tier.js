'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Tier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tier.init(
    {
      tier_name: DataTypes.STRING,
      min_poin: DataTypes.INTEGER,
      max_poin: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Tier',
      underscored: true,
      tableName: 'tiers',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return Tier
}
