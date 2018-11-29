'use strict';
module.exports = (sequelize, DataTypes) => {
  const registration_state_details = sequelize.define('registration_state_details', {
    registration_state: DataTypes.STRING
  }, {});
  registration_state_details.associate = function(models) {
    // associations can be defined here
  };
  return registration_state_details;
};