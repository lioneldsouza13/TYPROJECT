'use strict';
module.exports = (sequelize, DataTypes) => {
  const owner = sequelize.define('owner', {
      owner_id:DataTypes.BIGINT,
      vehicle_id:DataTypes.BIGINT,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      pincode: DataTypes.DOUBLE,
      mobile_no: DataTypes.DOUBLE,
      email: DataTypes.STRING,
      DOB: DataTypes.DATE,
      documents: DataTypes.BLOB
  }, {});
  owner.associate = function(models) {
    // associations can be defined here
  };
  return owner;
};