'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    client_id:{type:DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
      vehicle_id:DataTypes.BIGINT,
    address: DataTypes.STRING,
    name: DataTypes.STRING,
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