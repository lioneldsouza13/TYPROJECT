'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicle_details', {
      vehicle_details_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      vehicle_owners_name:{
        type:Sequelize.STRING
      },
      vehicle_year:{
        type:Sequelize.DATE
      },
      vehicle_type:{
        type:Sequelize.STRING(10)
      },
      vehicle_number:{
        type:Sequelize.STRING(10)
      },
        vehicle_price_per_day:{
        type:Sequelize.BIGINT(10)
        },
        vehicle_image:{
        type:Sequelize.BLOB
        },
        vehicle_documents:{
        type:Sequelize.BLOB
        },
        vehicle_price:{
        type:Sequelize.BIGINT(10)
        },
        vehicle_details:{
        type:Sequelize.STRING
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
    return queryInterface.dropTable('vehicle_details');
  }
};