const Sequelize = require('sequelize')
const {sequelize}= require('./../connections/sequelizeConnection')
const {User,Client,Vendor,MasterVehicle,fourWheeler,twoWheeler,feedback,rating,purchase}= require('../sequelize_models/models')


const Users = User(sequelize,Sequelize);
const Clients = Client(sequelize,Sequelize);
const Vendors = Vendor(sequelize,Sequelize);
const Master_Vehicle = MasterVehicle(sequelize,Sequelize);
const Four_Wheeler = fourWheeler(sequelize,Sequelize);
const Two_Wheeler = twoWheeler(sequelize,Sequelize);
const Feedback = feedback(sequelize,Sequelize);
const Rating = rating(sequelize,Sequelize);
const Purchase = purchase(sequelize,Sequelize);

sequelize.sync({
    force: true
}).then(()=>{
    console.log('Tables Created');
}).catch(
    (e) => {
        console.log(e);
    }
);