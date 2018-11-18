'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_vehicle = sequelize.define('master_vehicle', {
    vehicle_id:DataTypes.BIGINT,
    vehicle_details: DataTypes.STRING,
    client_id: DataTypes.BIGINT,
    vendor_id: DataTypes.BIGINT
  }, {});
  master_vehicle.associate = function(models) {
   master_vehicle.hasMany(models.feedback,{foreignKey:'vehicle_id'})
      master_vehicle.hasMany(models.rating,{foreignKey:'vehicle_id'})
      master_vehicle.hasMany(models.purchase,{foreignKey:'vehicle_id'})
      master_vehicle.hasMany(models.two_wheeler,{foreignKey:'vehicle_id'})
      master_vehicle.hasMany(models.four_wheeler,{foreignKey:'vehicle_id'})

      master_vehicle.belongsTo(models.client,{foreignKey:'client_id'})
      master_vehicle.belongsTo(models.vendor,{foreignKey:'vendor_id'})
  };
  return master_vehicle;
};