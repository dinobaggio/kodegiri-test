'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('memberships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_no: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      join_date: {
        type: Sequelize.STRING
      },
      referral: {
        type: Sequelize.STRING
      },
      earned_point: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      redeemed_point: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      remained_point: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      status: {
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
    await queryInterface.dropTable('memberships');
  }
};