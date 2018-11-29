'use strict';
module.exports = (sequelize, DataTypes) => {
  const km_driven_details = sequelize.define('km_driven_details', {
    km_driven: DataTypes.STRING
  }, {});
  km_driven_details.associate = function(models) {
    // associations can be defined here
  };
  return km_driven_details;
};