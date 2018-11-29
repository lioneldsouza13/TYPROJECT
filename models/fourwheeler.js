'use strict';
module.exports = (sequelize, DataTypes) => {
  const fourwheeler = sequelize.define('fourwheeler', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    fuel: DataTypes.STRING
  }, {});
  fourwheeler.associate = function(models) {
    // associations can be defined here
  };
  return fourwheeler;
};