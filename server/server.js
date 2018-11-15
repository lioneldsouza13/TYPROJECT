const express = require('express')
const body_parser = require('body-parser')
const path=require('path');
const {User,Vendor,Client,MasterVehicle,twoWheeler,fourWheeler,feedback,rating,purchase}= require('./../sequelize_models/models')
const {connection} = require('./../connection/connection')
const publicPath = path.join(__dirname, '../public');
//const{createTable,insertTableValues,updateTable,deleteValues} = require('./../queries/table-creation');
const axios = require('axios')

const Sequelize = require('sequelize')
const {sequelize} = require('./../connection/sequelizeConnection')

var app = express();

const http = require('http');
var server = http.createServer(app);

app.use(express.static(publicPath))
app.use(body_parser.json())


//Inserting Data into Table
app.post('/insert-table-values',(req,res)=>{

    try{
        var tableName = req.body.tableName;
        var valuesFetched = req.body.values;
        var values = valuesFetched.split(',');
            if(tableName==='User') {
                const Users = User(sequelize, Sequelize)
                Users.create({
                    UserId: `${values[0]}`,
                    User_Name: `${values[1]}`,
                    User_Address: `${values[2]}`,
                    User_City: `${values[3]}`,
                    User_Pincode: `${values[4]}`,
                    User_Mobile_No: `${values[5]}`,
                    User_Email: `${values[6]}`,
                    User_DOB: `${7}`
                }).then(() => {
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)

                }).catch((e) => {
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)

                })



            }
            else if(tableName==='Vendor')
            {
                const Vendors = Vendor(sequelize,Sequelize)
                Vendors.create({
                        Vendor_ID:`${values[0]}`,
                        Vendor_Name:`${values[1]}`,
                        Vendor_Address:`${values[2]}`,
                        Vendor_City:`${values[3]}`,
                        Vendor_Pincode:`${values[4]}`,
                        Vendor_Mobile_No:`${values[5]}`,
                        Vendor_Email:`${values[6]}`,
                        Vendor_DOB:`${values[7]}`,
                        Vendor_Vehicle_ID:`${values[8]}`,
                        Vendor_Vehicle_Name:`${values[9]}`,
                        Vendor_Vehicle_Year:`${values[10]}`,
                        Vendor_Vehicle_Type:`${values[11]}`,
                        Vendor_Vehicle_Number:`${values[12]}`,
                        Vendor_Vehicle_Price_Per_Day: `${values[13]}`,
                        Vendor_Vehicle_Image: `${values[14]}`,
                        Vendor_Vehicle_Document: `${values[15]}`,
                        Vendor_Documents: `${values[16]}`

                }).then(()=>{
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)

                }).catch((e) => {
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)
                })
            }
            else if(tableName ==='Client')
            {
                const Clients = Client(sequelize,Sequelize)
                Clients.create({
                    Client_ID:`${values[0]}`,
                    Client_Name:`${values[1]}`,
                    Client_Address:`${values[2]}`,
                    Client_City:`${values[3]}`,
                    Client_Pincode:`${values[4]}`,
                    Client_Mobile_No:`${values[5]}`,
                    Client_Email:`${values[6]}`,
                    Client_DOB:`${values[7]}`,
                    Client_Vehicle_ID:`${values[8]}`,
                    Client_Vehicle_Name:`${values[9]}`,
                    Client_Vehicle_Year:`${values[10]}`,
                    Client_Vehicle_Type:`${values[11]}`,
                    Client_Vehicle_Number:`${values[12]}`,
                    Client_Vehicle_Price_Per_Day: `${values[13]}`,
                    Client_Vehicle_Image: `${values[14]}`,
                    Client_Vehicle_Document: `${values[15]}`,
                    Client_Documents: `${values[16]}`

                }).then(()=>{
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)

                }).catch((e) => {
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)
                })
            }
            else if(tableName ==='Master Vehicle')
            {
                const masterVehicle = MasterVehicle(sequelize,Sequelize)
                masterVehicle.create({
                    Vehicle_ID:`${values[0]}`,
                    Vehicle_Name:`${values[1]}`,
                    Vehicle_Image:`${values[2]}`,
                    Vehicle_Year:`${values[3]}`,
                    Vehicle_Details:`${values[4]}`,
                    Vehicle_Number:`${values[5]}`,
                    Vehicle_Owners_Name:`${values[6]}`,
                    City:`${values[7]}`,
                    Vehicle_Type:`${values[8]}`,
                    Vehicle_Documents:`${values[9]}`,
                    Client_Vehicle_ID:`${values[10]}`,
                    Vendor_Vehicle_ID:`${values[11]}`,

                }).then(()=>{
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)

                }).catch((e)=>{
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)
                })
            }

            else if(tableName ==='Four-Wheeler')
            {
                const FourWheeler = fourWheeler(sequelize,Sequelize)
                FourWheeler.create({
                    Vehicle_ID:`${values[0]}`,
                    Vehicle_Name:`${values[1]}`,
                    Vehicle_Image:`${values[2]}`,
                    Vehicle_Year:`${values[3]}`,
                    Vehicle_Details:`${values[4]}`,
                    Vehicle_Number:`${values[5]}`,
                    Vehicle_Owners_Name:`${values[6]}`,
                    City:`${values[7]}`,
                    Vehicle_Type:`${values[8]}`,
                    Vehicle_Documents:`${values[9]}`,
                    Vehicle_Price:`${values[10]}`
                    }).then(()=>{
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)
                }).catch((e)=>{
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)
                })
            }
            else if(tableName ==='Two-Wheeler')
            {
                const TwoWheeler = twoWheeler(sequelize,Sequelize)
              TwoWheeler.create(
                  {
                      Vehicle_ID:`${values[0]}`,
                      Vehicle_Name:`${values[1]}`,
                      Vehicle_Image:`${values[2]}`,
                      Vehicle_Year:`${values[3]}`,
                      Vehicle_Details:`${values[4]}`,
                      Vehicle_Number:`${values[5]}`,
                      Vehicle_Owners_Name:`${values[6]}`,
                      City:`${values[7]}`,
                      Vehicle_Type:`${values[8]}`,
                      Vehicle_Documents:`${values[9]}`,
                      Vehicle_Price:`${values[10]}`
                  }
              ).then(()=>{
                  console.log(`Data Inserted in ${tableName} Table`)
                  res.status(200).send(`Data Inserted in ${tableName} Table`)
              }).catch((e)=>{
                  console.log(e)
                  res.status(400).send(e.original.sqlMessage)
              })
            }
            else if(tableName==='Feedback')
            {
                const Feedback = feedback(sequelize,Sequelize)
                Feedback.create({
                    Feedback_ID: `${values[0]}`,
                    Vehicle_ID:`${values[1]}`,
                    Vehicle_Name:`${values[2]}`,
                    UserId:`${values[3]}`,
                    User_Name: `${values[4]}`,
                    Feedback_Comment: `${values[5]}`
                }).then(()=>{
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)
                }).catch((e)=>{
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)
                })
            }
            else if(tableName==='Rating')
            {
                const Rating = rating(sequelize,Sequelize)
                Rating.create({
                    Rating_ID: `${values[0]}`,
                    UserId:`${values[1]}`,
                    Vehicle_ID:`${values[2]}`,
                    Vehicle_Name: `${values[3]}`,
                    User_Name:`${values[4]}`,
                    Rating_Number: `${values[5]}`

                }).then(()=>{
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)
                }).catch((e)=>{
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)
                })
            }
            else if(tableName ==='Purchase')
            {
                const Purchase = purchase(sequelize,Sequelize)
                Purchase.create({
                    Item_ID:`${values[0]}`,
                    Quantity:`${values[1]}`,
                    Price:`${values[2]}`,
                    Purchase_Type: `${values[3]}`,
                    Buyer_ID: `${values[4]}`,
                    Buyer_Name: `${values[5]}`,
                    Seller_ID: `${values[6]}`,
                    Seller_Name: `${values[7]}`,
                    Item_Name: `${values[8]}`,
                    UserId: `${values[9]}`,
                    Vehicle_ID: `${values[10]}`,
                    Accessory_ID: `${values[11]}`
                }).then(()=>{
                    console.log(`Data Inserted in ${tableName} Table`)
                    res.status(200).send(`Data Inserted in ${tableName} Table`)
                }).catch((e)=>{
                    console.log(e)
                    res.status(400).send(e.original.sqlMessage)
                })
            }

            else{
                res.status(400).send('Enter a correct Table Name')
            }


            }
    catch(e)
    {
        res.status(400).send(e)
    }
})

//Deleting a table
app.delete('/delete-table/:tableName',(req,res)=>{
    try{
        connection.query(`DROP TABLE ${req.params.tableName}`).then((result)=>{
            console.log(`${req.params.tableName} TABLE DROPPED`);
            res.send(`${req.params.tableName} TABLE DROPPED`);
        }).catch((e)=>res.status(400).send(e.sqlMessage))


    }catch (e) {
        res.status(400).send(e)
    }
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


server.listen(3000,()=>{
    console.log('Server Started at Port 3000')
})
module.exports={app}