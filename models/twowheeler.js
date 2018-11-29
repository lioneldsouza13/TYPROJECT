'use strict';
module.exports = (sequelize, DataTypes) => {
  const twoWheeler = sequelize.define('twoWheeler', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    fuel: DataTypes.STRING
  }, {});
  twoWheeler.associate = function(models) {
    // associations can be defined here
  };
  return twoWheeler;
};