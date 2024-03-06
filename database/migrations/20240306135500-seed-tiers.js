'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tiers', [
      {
        id: 1,
        tier_name: 'Tier 1',
        min_poin: 0,
        max_poin: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        tier_name: 'Tier 2',
        min_poin: 11,
        max_poin: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        tier_name: 'Tier 3',
        min_poin: 101,
        max_poin: 1000,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
