'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feedback', {
      feedback_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      vehicle_id: {
          allowNull: false,
        type: Sequelize.BIGINT
      },
      vehicle_name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
          allowNull: false,
        type: Sequelize.BIGINT
      },
      user_name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      feedback_comment: {
          allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('feedback');
  }
};