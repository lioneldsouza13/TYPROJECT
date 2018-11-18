'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
      client_id: DataTypes.BIGINT,
    details_id: DataTypes.BIGINT,
    vehicle_details_id: DataTypes.BIGINT,
    client_name: DataTypes.STRING,
    vehicle_name: DataTypes.STRING
  }, {});
  client.associate = function(models) {
    client.hasMany(models.master_vehicle,{foreignKey:'client_id'});
    client.belongsTo(models.personal_details,{foreignKey: 'details_id'})
      client.belongsTo(models.vehicle_details,{foreignKey: 'vehicle_details_id'})
  };
  return client;
};