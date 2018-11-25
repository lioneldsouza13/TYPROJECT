'use strict';
module.exports = (sequelize, DataTypes) => {
  const feedback = sequelize.define('feedback', {
    feedback_id:DataTypes.BIGINT,
    vehicle_id: DataTypes.BIGINT,
    vehicle_name: DataTypes.STRING,
    user_id: DataTypes.BIGINT,
    user_name: DataTypes.STRING,
    feedback_comment: DataTypes.STRING
  }, {});
  feedback.associate = function(models) {
    // feedback.belongsTo(models.master_vehicle,{foreignKey:'vehicle_id'})
      feedback.belongsTo(models.user,{foreignKey:'user_id'})
  };
  return feedback;
};