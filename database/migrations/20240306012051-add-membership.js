'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('memberships', [
      {
        member_no: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone_no: '123456789',
        birth_date: '1990-01-01',
        address: '123 Main Street',
        join_date: '2022-01-01',
        referral: 'friend123',
        earned_point: 0,
        redeemed_point: 0,
        remained_point: 0,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        member_no: 2,
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone_no: '987654321',
        birth_date: '1995-05-05',
        address: '456 Elm Street',
        join_date: '2022-01-15',
        referral: 'family456',
        earned_point: 0,
        redeemed_point: 0,
        remained_point: 0,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
