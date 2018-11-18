'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accessories', {
        accessory_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
        accessory_name: {
            allowNull: false,
        type: Sequelize.STRING
      },
        accessory_image: {
            allowNull: false,
        type: Sequelize.BLOB
      },
        accessory_details: {
            allowNull: false,
        type: Sequelize.STRING
      },
        accessory_price: {
            allowNull: false,
        type: Sequelize.BIGINT
      },
        accessory_use: {
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
    return queryInterface.dropTable('accessories');
  }
};