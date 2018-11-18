'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('purchase', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      quantity: {
          allowNull: false,
        type: Sequelize.BIGINT
      },
      price: {
          allowNull: false,
        type: Sequelize.BIGINT
      },
      purchase_type: {
          allowNull: false,
        type: Sequelize.STRING
      },
      item_name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      buyer_name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      seller_name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      vehicle_id: {
        type: Sequelize.BIGINT
      },
      accessory_id: {
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
    return queryInterface.dropTable('purchase');
  }
};