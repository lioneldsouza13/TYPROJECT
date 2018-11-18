'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('personal_details', {
      details_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
     address:{
         type:Sequelize.STRING,
         allowNull: false
     },
        city:{
            type:Sequelize.STRING,
            allowNull: false
        },
        pincode:{
            type:Sequelize.BIGINT(6),
            allowNull: false
        },
        mobile_no:{
            type:Sequelize.BIGINT(10),
            allowNull: false
        },
        email:{
        type:Sequelize.STRING,
            allowNull:false
        },
        DOB:{
        type:Sequelize.DATE,
            allowNull:false
        },
        documents:{
        type:Sequelize.BLOB
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
    return queryInterface.dropTable('personal_details');
  }
};