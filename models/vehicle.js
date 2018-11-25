'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehicle = sequelize.define('vehicle', {
      vehicle_id:DataTypes.BIGINT,
      owner_id: DataTypes.BIGINT,
      name: DataTypes.STRING,
      year: DataTypes.DATE,
      type: DataTypes.STRING,
      number_plate: DataTypes.STRING,
      price_per_day: DataTypes.BIGINT,
      image: DataTypes.BLOB,
      documents: DataTypes.BLOB,
      price: DataTypes.BIGINT
  }, {});
  vehicle.associate = function(models) {
    // associations can be defined here
  };
  return vehicle;
};