'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      client_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      details_id: {
        type: Sequelize.BIGINT,
          allowNull: false,
      },
      vehicle_details_id: {
        type: Sequelize.BIGINT,
          allowNull: false,
      },
      client_name: {
        type: Sequelize.STRING,
          allowNull: false,
      },
      vehicle_name: {
        type: Sequelize.STRING,
          allowNull: false,
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
    return queryInterface.dropTable('clients');
  }
};