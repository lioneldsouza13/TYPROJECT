'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    transaction_id:{type:DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true},
    client_id: DataTypes.BIGINT,
    vehicle_id: DataTypes.BIGINT,
    date: DataTypes.DATE,
    type: DataTypes.STRING
  }, {});
  transaction.associate = function(models) {
    // associations can be defined here
  };
  return transaction;
};