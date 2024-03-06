'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('loyalty_programs', [
      {
        id: 1,
        loyalty_name: 'Get Member',
        tier_name: 'Tier 1',
        tier_id: 1,
        policy_name: 'Community',
        policy_id: 1,
        benefit_name: 'member_get_member',
        benefit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
