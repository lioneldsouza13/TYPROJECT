'use strict';
module.exports = (sequelize, DataTypes) => {
  const sign_up = sequelize.define('user', {
    id:DataTypes.BIGINT,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.BIGINT,
    DOB: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  sign_up.associate = function(models) {
    // associations can be defined here
  };
  return sign_up;
};