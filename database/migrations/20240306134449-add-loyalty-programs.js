'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loyalty_programs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loyalty_name: {
        type: Sequelize.STRING
      },
      tier_name: {
        type: Sequelize.STRING
      },
      tier_id: {
        type: Sequelize.INTEGER
      },
      policy_id: {
        type: Sequelize.INTEGER
      },
      policy_name: {
        type: Sequelize.STRING
      },
      benefit_id: {
        type: Sequelize.INTEGER
      },
      benefit_name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('loyalty_programs');
  }
};