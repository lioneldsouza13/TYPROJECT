const express = require('express')
const body_parser = require('body-parser')
const path=require('path');
const {User,Vendor,Client,MasterVehicle,twoWheeler,fourWheeler,feedback,rating,purchase}= require('./../sequelize_models/models')
//const {connection} = require('./../connection/connection')
const publicPath = path.join(__dirname, '../public');
//const{createTable,insertTableValues,updateTable,deleteValues} = require('./../queries/table-creation');
const axios = require('axios');
const cors = require('cors');

const Sequelize = require('sequelize')
const {sequelize} = require('./../connection/sequelizeConnection')

var app = express();

const http = require('http');
var server = http.createServer(app);

app.use(express.static(publicPath))
app.use(body_parser.json())
app.use(cors())

//Inserting Data into Table
app.post('/insert-table-values',(req,res,next)=>{
    console.log('Route Reached');
        var tableName = req.body.tableName

    var user = req.body.values
    
    console.log(user)

           
                const Users = User(sequelize, Sequelize)
                Users.create({
                    UserId: `${user.ID}`,
                    User_Name: `${user.name}`,
                    User_Address: `${user.address}`,
                    User_City: `${user.city}`,
                    User_Pincode: `${user.pinCode}`,
                    User_Mobile_No: `${user.mobileNo}`,
                    User_Email: `${user.Email}`,
                    User_DOB: `${user.DOB}`
                }).then(() => {
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)

                }).catch((e) => {
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)

                })


            })
            
           

   app.get('/fetch-values',(req,res,next)=>
   {
    const Users = User(sequelize, Sequelize)
    Users.findAll({attributes:['UserId','User_Name']}).then((result)=>{
        res.send(result)
    }).catch((e)=>{
        res.status(400).send(e.original.sqlMessage)
    })

   })


//delete rows from  table
app.delete('/delete-rows/:tableName/:where/:value',(req,res)=>{
    try{
        connection.query(`DELETE FROM ${req.params.tableName} WHERE ${req.params.where}= '${req.params.value}'`).then((result)=>{
            console.log(`ROW DELETED FROM ${req.params.tableName}`)
            res.send(`ROW DELETED FROM ${req.params.tableName}`)
        }).catch((e)=>res.status(400).send(e.sqlMessage));

    }catch (e) {
        res.status(400).send(e);
    }

})
//Update table Values
app.patch('/update/:tableName/:column/:columnValue/:condition/:conditionValue',(req,res)=>{
    try{
        var tableName = req.params.tableName;
        var column = req.params.column;
        var value= req.params.columnValue;
        var condition = req.params.condition;
        var conditionValue = req.params.conditionValue

        connection.query(`UPDATE ${tableName} SET ${column}='${value}' WHERE ${condition}='${conditionValue}'`).then((result)=>{
            console.log(`${req.params.tableName} TABLE UPDATED`)
            res.send(`${req.params.tableName} TABLE UPDATED`)
        }).catch((e)=>res.status(400).send(e.sqlMessage));

    }catch (e) {
        res.status(400).send(e);
    }
})


//Fetching data without where clause
app.get('/search/:tableName',(req,res)=>{
    try{

        connection.query(`SELECT * FROM ${req.params.tableName}`).then((result)=>{
                for(var name in result) {
                    var d = new Date(result[name].User_DOB);
                    d.setMinutes(d.getMinutes() + 330);
                    result[name].User_DOB = d;

                    var d1 = new Date(result[name].Date);
                    d1.setMinutes(d1.getMinutes() + 330);
                    result[name].Date = d1;


                }
            console.log(result)
            res.send(result)



        }).catch((e)=>res.status(400).send(e.sqlMessage));

    }
    catch (e) {
        res.send(e)
    }
})



//Fetching data with where clause
app.get('/search/:tableName/:where/:value',(req,res)=>{

try{

    connection.query(`SELECT * FROM ${req.params.tableName} where ${req.params.where}='${req.params.value}'`).then((result)=>{

        for(var name in result)
        {    var d = new Date(result[name].User_DOB);
            d.setMinutes( d.getMinutes() + 330 );
            result[name].User_DOB = d;

            var d1 = new Date(result[name].Date);
            d1.setMinutes( d1.getMinutes() + 330 );
            result[name].Date =d1;
            console.log(result)
            res.send(result)
        }
    }).catch((e)=>res.status(400).send(e.sqlMessage));



}catch (e) {
    res.status(400).send(e)
}

})


server.listen(3001,()=>{
    console.log('Server Started at Port 3001')
})
module.exports={app}