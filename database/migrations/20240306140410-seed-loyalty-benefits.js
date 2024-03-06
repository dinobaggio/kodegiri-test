'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('loyalty_benefits', [
      {
        policy_id: 1,
        policy_name: "Community",
        benefit_name: "member_get_member",
        type: "fixed point",
        value: 50,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
