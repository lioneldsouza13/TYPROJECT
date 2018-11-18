'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ratings', {
      rating_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
          allowNull: false,
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
      user_name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      rating_number: {
          allowNull: false,
        type: Sequelize.BIGINT
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
    return queryInterface.dropTable('ratings');
  }
};