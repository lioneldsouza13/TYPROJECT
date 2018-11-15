const Sequelize = require('sequelize')
const {sequelize}= require('./../connection/sequelizeConnection')
const {User,Client,Vendor,MasterVehicle,fourWheeler,twoWheeler,feedback,rating,purchase}= require('./../sequelize_models/models')


const Users = User(sequelize,Sequelize);
const Clients = Client(sequelize,Sequelize);
const Vendors = Vendor(sequelize,Sequelize);
const Master_Vehicle = MasterVehicle(sequelize,Sequelize);
const Four_Wheeler = fourWheeler(sequelize,Sequelize);
const Two_Wheeler = twoWheeler(sequelize,Sequelize);
const Feedback = feedback(sequelize,Sequelize);
const Rating = rating(sequelize,Sequelize);
const Purchase = purchase(sequelize,Sequelize);

Users.create({
    UserId:1,User_Name:'Test',User_Address: 'bandra',User_City: 'mumbai',User_Pincode: '400050',User_Mobile_No: '9865956589',User_Email: 'test@gmal.com',
    User_DOB:'10-10-1999'
}).then(()=>{
    console.log('Data Inserted')
    sequelize.close()
}).catch((e)=>{console.log(e)})
// sequelize.sync()
//     .then(() => {
//         console.log(`Tables created!`)
//         sequelize.close();
//     })
