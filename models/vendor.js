'use strict';
module.exports = (sequelize, DataTypes) => {
  const vendor = sequelize.define('vendor', {
    vendor_id:DataTypes.BIGINT,
    details_id: DataTypes.BIGINT,
    vehicle_details_id: DataTypes.BIGINT,
    vendor_name: DataTypes.STRING,
    vehicle_name: DataTypes.STRING
  }, {});
  vendor.associate = function(models) {
   vendor.hasMany(models.master_vehicle,{foreignKey:'vendor_id'})
      vendor.belongsTo(models.personal_details,{foreignKey: 'details_id'})
      vendor.belongsTo(models.vehicle_details,{foreignKey: 'vehicle_details_id'})
  };
  return vendor;
};