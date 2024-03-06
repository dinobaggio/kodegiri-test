'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_id: {
        type: Sequelize.STRING
      },
      prefix_id: {
        type: Sequelize.STRING
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      member_no: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      items: {
        type: Sequelize.STRING
      },
      total_amount: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};