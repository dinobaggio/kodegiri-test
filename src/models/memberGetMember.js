'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class MemberGetMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MemberGetMember.init(
    {
      member_no: DataTypes.STRING,
      name: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      email: DataTypes.STRING,
      persons: DataTypes.STRING,
      transaction_date: DataTypes.DATE,
      transaction_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'MemberGetMember',
      underscored: true,
      tableName: 'member_get_member',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return MemberGetMember
}
