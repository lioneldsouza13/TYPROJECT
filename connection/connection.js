var mysql      = require('promise-mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'test',
    multipleStatements: true
});
var connectionDatabase = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    multipleStatements: true
});



module.exports ={connection,connectionDatabase};