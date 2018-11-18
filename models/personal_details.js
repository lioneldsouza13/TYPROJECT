'use strict';
module.exports = (sequelize, DataTypes) => {
  const personal_details = sequelize.define('personal_details', {
    details_id: DataTypes.BIGINT,
    address:DataTypes.STRING,
    city:DataTypes.STRING,
    pincode:DataTypes.BIGINT(6),
    mobile_no:DataTypes.BIGINT(10),
    email:DataTypes.STRING,
    DOB:DataTypes.DATE,
    documents:DataTypes.BLOB
  }, {});
  personal_details.associate = function(models) {
    personal_details.hasMany(models.User,{foreignKey:'details_id'})
  };
  return personal_details;
};