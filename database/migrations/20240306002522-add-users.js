'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: '$2a$12$RqWKM9TYPj.UeDbpk8EbGOyE2vyeVb7X/wFxVYo6URt4S2Zd.LVGq', // Password123@
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};