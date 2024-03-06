'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      transaction_id: DataTypes.STRING,
      prefix_id: DataTypes.STRING,
      transaction_date: DataTypes.DATE,
      member_no: DataTypes.INTEGER,
      name: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      email: DataTypes.STRING,
      items: DataTypes.STRING,
      total_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Transaction',
      underscored: true,
      tableName: 'transactions',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return Transaction
}
