'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class HistoryPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HistoryPoint.init(
    {
      transaction_id: DataTypes.STRING,
      member_no: DataTypes.INTEGER,
      transaction_date: DataTypes.DATE,
      type: DataTypes.STRING,
      loyalty_name: DataTypes.STRING,
      loyalty_id: DataTypes.INTEGER,
      existing_poin: DataTypes.INTEGER,
      earned_poin: DataTypes.INTEGER,
      balance_poin: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'HistoryPoint',
      underscored: true,
      tableName: 'history_points',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return HistoryPoint
}
