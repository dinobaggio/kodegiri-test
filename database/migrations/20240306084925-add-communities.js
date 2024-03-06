module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('communities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_no: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      activity_name: {
        type: Sequelize.STRING
      },
      persons: {
        type: Sequelize.STRING
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      transaction_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING, // member_get_member, member_activity
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('communities');
  }
};