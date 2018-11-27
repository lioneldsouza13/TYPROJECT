'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehicle = sequelize.define('vehicle', {
      vehicle_id:DataTypes.BIGINT,
      owner_id: DataTypes.BIGINT,
      vehicle_type:DataTypes.STRING,
      brand: DataTypes.STRING,
      model:DataTypes.STRING,
      fuel_type:DataTypes.STRING,
      year: DataTypes.DATE,
      registration_state: DataTypes.STRING,
      km_driven:DataTypes.STRING,
      number_plate: DataTypes.STRING,
      price_per_day: DataTypes.BIGINT,
      description:DataTypes.STRING,
      image: DataTypes.BLOB,
      documents: DataTypes.BLOB,
      price: DataTypes.BIGINT,
      status:DataTypes.STRING
  }, {});
  vehicle.associate = function(models) {
    // associations can be defined here
  };
  return vehicle;
};