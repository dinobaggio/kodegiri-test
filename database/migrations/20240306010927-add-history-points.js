'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('history_points', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_id: {
        type: Sequelize.STRING
      },
      member_no: {
        type: Sequelize.INTEGER
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.STRING
      },
      loyalty_name: {
        type: Sequelize.STRING
      },
      loyalty_id: {
        type: Sequelize.INTEGER
      },
      existing_poin: {
        type: Sequelize.INTEGER
      },
      earned_poin: {
        type: Sequelize.INTEGER
      },
      balance_poin: {
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
    await queryInterface.dropTable('history_points');
  }
};