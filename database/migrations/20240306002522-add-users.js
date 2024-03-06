'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: '$2a$12$aWw.HuX6y601X9tGEG4SMeNoexupC8a2IeeN/gKplvL943.NV2P2e', // password123
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};