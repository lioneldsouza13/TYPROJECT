'use strict';
module.exports = (sequelize, DataTypes) => {
  const two_wheeler = sequelize.define('two_wheeler', {
    vehicle_id:DataTypes.BIGINT,
    vehicle_details_id: DataTypes.BIGINT,
    vehicle_name: DataTypes.STRING
  }, {});
  two_wheeler.associate = function(models) {
   two_wheeler.belongsTo(models.master_vehicle,{foreignKey:'vehicle_id'})
      two_wheeler.belongsTo(models.vehicle_details,{foreignKey:'vehicle_details_id'})
  };
  return two_wheeler;
};