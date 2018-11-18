'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendors', {
      vendor_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      details_id: {
          allowNull: false,
        type: Sequelize.BIGINT
      },
      vehicle_details_id: {
          allowNull: false,
        type: Sequelize.BIGINT
      },
      vendor_name: {
          allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('vendors');
  }
};