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
      {
        id: 2,
        loyalty_name: 'First Purchase Get 10 Point',
        tier_name: 'Tier 1',
        tier_id: 1,
        policy_name: 'Transactional',
        policy_id: 2,
        benefit_name: 'first_purchase_point',
        benefit_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        loyalty_name: 'First Purchase Get Discount 20%',
        tier_name: 'Tier 1',
        tier_id: 1,
        policy_name: 'Transactional',
        policy_id: 2,
        benefit_name: 'first_purchase_discount',
        benefit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
