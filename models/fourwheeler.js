'use strict';
module.exports = (sequelize, DataTypes) => {
  const fourWheeler = sequelize.define('fourWheeler', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    fuel: DataTypes.STRING
  }, {});
  fourWheeler.associate = function(models) {
    // associations can be defined here
  };
  return fourWheeler;
};