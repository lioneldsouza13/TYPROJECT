'use strict';
module.exports = (sequelize, DataTypes) => {
  const four_wheeler = sequelize.define('four_wheeler', {
    vehicle_id:DataTypes.BIGINT,
    vehicle_details_id: DataTypes.BIGINT,
    vehicle_name: DataTypes.STRING
  }, {});
  four_wheeler.associate = function(models) {
    four_wheeler.belongsTo(models.master_vehicle,{foreignKey:'vehicle_id'})
      four_wheeler.belongsTo(models.vehicle_details,{foreignKey:'vehicle_details_id'})
  };
  return four_wheeler;
};