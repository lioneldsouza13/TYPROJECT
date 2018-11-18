'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchase = sequelize.define('purchase', {
    quantity: DataTypes.BIGINT,
    price: DataTypes.BIGINT,
    purchase_type: DataTypes.STRING,
    item_name: DataTypes.STRING,
    buyer_name: DataTypes.STRING,
    seller_name: DataTypes.STRING,
    user_id: DataTypes.BIGINT,
    vehicle_id: DataTypes.BIGINT,
    accessory_id: DataTypes.BIGINT
  }, {});
  purchase.associate = function(models) {
   purchase.belongsTo(models.user,{foreignKey:'user_id'})
      purchase.belongsTo(models.master_vehicle,{foreignKey:'vehicle_id'})
      purchase.belongsTo(models.accessory,{foreignKey:'accessory_id'})
  };
  return purchase;
};