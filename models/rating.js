'use strict';
module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('rating', {
    rating_id:DataTypes.BIGINT,
    user_id: DataTypes.BIGINT,
    vehicle_id: DataTypes.BIGINT,
    vehicle_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    rating_number: DataTypes.BIGINT
  }, {});
  rating.associate = function(models) {
  // rating.belongsTo(models.master_vehicle,{foreignKey:'vehicle_id'});
  // rating.belongsTo(models.user,{foreignKey:'user_id'})
  };
  return rating;
};