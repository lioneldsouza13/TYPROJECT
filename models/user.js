'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_id:DataTypes.BIGINT,
    details_id: DataTypes.BIGINT,
    user_name: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.rating,{foreignKey: 'user_id'});
      user.hasMany(models.feedback,{foreignKey: 'user_id'});
      user.hasMany(models.purchase,{foreignKey: 'user_id'});
    user.belongsTo(models.personal_details,{foreignKey:'details_id'});
  };
  return user;
};