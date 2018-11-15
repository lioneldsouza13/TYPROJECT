var mysql = require('promise-mysql');
var mysql1 = require('mysql')
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'typroject',
    multipleStatements: true
});
var connectionDatabase = mysql1.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'test',
    multipleStatements: true
});



module.exports ={connection,connectionDatabase};