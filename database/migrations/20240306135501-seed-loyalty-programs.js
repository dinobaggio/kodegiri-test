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
        benefit_name: 'first_purchase_disc20',
        benefit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        loyalty_name: 'Transaction more than Rp. 50.000 get 10 point',
        tier_name: 'Tier 1',
        tier_id: 1,
        policy_name: 'Transactional',
        policy_id: 2,
        benefit_name: 'transaction_amount_50',
        benefit_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        loyalty_name: 'Transaction more than Rp. 100.000 get discount 10%',
        tier_name: 'Tier 2',
        tier_id: 2,
        policy_name: 'Transactional',
        policy_id: 2,
        benefit_name: 'transaction_amount_100_disc10',
        benefit_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
