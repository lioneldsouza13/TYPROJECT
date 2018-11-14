const express = require('express')
const body_parser = require('body-parser')
const path=require('path');
const {connection} = require('./../connection/connection')
const publicPath = path.join(__dirname, '../public');
const{createTable,insertTableValues,updateTable,deleteValues} = require('./../queries/table-creation');
const axios = require('axios')



var app = express();

const http = require('http');
var server = http.createServer(app);

app.use(express.static(publicPath))
app.use(body_parser.json())

//Table Creation
app.post('/table-creation',(req,res)=>{
    try{

        const createUserTable = `CREATE TABLE ${req.body.tableName} (${req.body.query})`;
        connection.query(createUserTable).then((result)=>{
            console.log(`${req.body.tableName} Table Created`)
            res.send(`${req.body.tableName} table Created `)
        }).catch((e)=>res.status(400).send(e.sqlMessage));

    }
    catch(e)
    {
        res.status.send(400);
        res.send(e)
    }

})

//Inserting Data into Table
app.post('/insert-table-values',(req,res)=>{

    try{
        var tableName = req.body.tableName;
        var query = req.body.query;
        var values = req.body.values;
        const insertQuery = `INSERT INTO ${tableName} (${query}) VALUES (${values})`;
        var url ='http://localhost:3000/search/user'


        connection.query(insertQuery).then((result)=> {
            res.send(`DATA INSERTED IN ${tableName} TABLE `)

            return axios.get(url)
        }).then((post)=>{

            post.data.map((test)=>{
                for(var name in test)
                {    var d = new Date(test[name].User_DOB);
                    d.setMinutes( d.getMinutes() + 330 );
                    test[name].User_DOB = d;

                    var d1 = new Date(test[name].Date);
                    d1.setMinutes( d1.getMinutes() + 330 );
                    test[name].Date =d1;
                    // console.log(test)
                    //res.send(result)
                }
              console.log(test)
            })

        }).catch((e)=>res.status(400).send(e.sqlMessage))



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