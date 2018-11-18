'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehicle_details = sequelize.define('vehicle_details', {
    vehicle_details_id: DataTypes.BIGINT,
    vehicle_owners_name:DataTypes.STRING,
    vehicle_year:DataTypes.DATE,
    vehicle_type:DataTypes.STRING(10),
    vehicle_number:DataTypes.STRING(10),
    vehicle_price_per_day:DataTypes.BIGINT(10),
    vehicle_image:DataTypes.BLOB,
    vehicle_documents:DataTypes.BLOB,
    vehicle_price:DataTypes.BIGINT(10),
    vehicle_details:DataTypes.STRING
  }, {});
  vehicle_details.associate = function(models) {
      vehicle_details.hasMany(models.Clients,{foreignKey:'vehicle_details_id'})
      vehicle_details.hasMany(models.Vendors,{foreignKey: 'vehicle_details_id'})
      vehicle_details.hasMany(models.Master_Vehicle,{foreignKey: 'vehicle_details_id'})
      vehicle_details.hasMany(models.Four_Wheeler,{foreignKey: 'vehicle_details_id'})
      vehicle_details.hasMany(models.Two_Wheeler,{foreignKey: 'vehicle_details_id'})

  };
  return vehicle_details;
};