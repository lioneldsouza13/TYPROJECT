'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('four_wheelers', {
      vehicle_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      vehicle_details_id: {
          allowNull: false,
        type: Sequelize.BIGINT
      },
      vehicle_name: {
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
    return queryInterface.dropTable('four_wheelers');
  }
};