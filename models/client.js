'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    client_id:DataTypes.BIGINT,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.DOUBLE,
    mobile_no: DataTypes.DOUBLE,
    email: DataTypes.STRING,
    DOB: DataTypes.DATE,
    documents: DataTypes.BLOB
  }, {});
  client.associate = function(models) {
    // associations can be defined here
  };
  return client;
};