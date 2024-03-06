'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Community.init(
    {
      member_no: DataTypes.STRING,
      name: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      email: DataTypes.STRING,
      persons: DataTypes.STRING,
      activity_name: DataTypes.STRING,
      transaction_date: DataTypes.DATE,
      transaction_id: DataTypes.STRING,
      type: DataTypes.STRING, // member_get_member, member_activity
    },
    {
      sequelize,
      modelName: 'Community',
      underscored: true,
      tableName: 'communities',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  )

  return Community
}
