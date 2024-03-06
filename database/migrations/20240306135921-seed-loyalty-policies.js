'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('loyalty_policies', [
      {
        id: 1,
        policy_name: 'Community',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        policy_name: 'Transactional',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
