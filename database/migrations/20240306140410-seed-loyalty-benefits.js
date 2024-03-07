'use strict';

const TYPE_BENEFIT = {
  FIXED_POINT: 'fixed point',
  PERCENTAGE: 'percentage',
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('loyalty_benefits', [
      {
        id: 1,
        policy_id: 1,
        policy_name: "Community",
        benefit_name: "member_get_member",
        type: TYPE_BENEFIT.FIXED_POINT,
        value: 50,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        policy_id: 2,
        policy_name: "Transactional",
        benefit_name: "first_purchase_point",
        type: TYPE_BENEFIT.FIXED_POINT,
        value: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        policy_id: 2,
        policy_name: "Transactional",
        benefit_name: "first_purchase_disc20",
        type: TYPE_BENEFIT.PERCENTAGE,
        value: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        policy_id: 2,
        policy_name: "Transactional",
        benefit_name: "transaction_amount_50",
        type: TYPE_BENEFIT.FIXED_POINT,
        value: 10,
        threshold_price: 50000,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        policy_id: 2,
        policy_name: "Transactional",
        benefit_name: "transaction_amount_100_disc10",
        type: TYPE_BENEFIT.PERCENTAGE,
        value: 10,
        threshold_price: 100000,
        point_price: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  }, // 

  down: async (queryInterface, Sequelize) => {
  }
};
