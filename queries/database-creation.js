const {connectionDatabase} = require('./../connection/connection')


const database =(name)=> {
    connectionDatabase.connect((err)=>{
        if(err) throw err
        console.log('CONNECTED')
    })



    var database_name = `CREATE DATABASE ${name}`
    connectionDatabase.query(database_name, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {

            console.log('DATABASE CREATE SUCCESSFULLY')
        }
    })

    connectionDatabase.end();
}

module.exports ={database}