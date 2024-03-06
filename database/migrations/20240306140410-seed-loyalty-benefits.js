'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('loyalty_benefits', [
      {
        id: 1,
        policy_id: 1,
        policy_name: "Community",
        benefit_name: "member_get_member",
        type: "fixed point",
        value: 50,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        policy_id: 2,
        policy_name: "Transactional",
        benefit_name: "first_purchase_point",
        type: "fixed point",
        value: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        policy_id: 2,
        policy_name: "Transactional",
        benefit_name: "first_purchase_discount",
        type: "percentage",
        value: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        policy_id: 2,
        policy_name: "Transactional",
        benefit_name: "transaction_amount_1",
        type: "percentage",
        value: 5,
        threshold_price: 50000,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  }, // 

  down: async (queryInterface, Sequelize) => {
  }
};
