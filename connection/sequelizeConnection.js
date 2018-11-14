const Sequelize = require('sequelize');
 const {Test} = require('./../sequelize_models/models');
var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}

const sequelize = new Sequelize('test2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    storage: 'path/to/database.sqlite'
},opts);


const User = Test(sequelize,Sequelize)
sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })
module.exports ={User}