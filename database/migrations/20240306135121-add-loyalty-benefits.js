'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loyalty_benefits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      policy_id: {
        type: Sequelize.INTEGER
      },
      policy_name: {
        type: Sequelize.STRING
      },
      benefit_name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      value: {
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
    await queryInterface.dropTable('loyalty_benefits');
  }
};