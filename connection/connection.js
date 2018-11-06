var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'TYPROJECT',
    multipleStatements: true
});
var connectionDatabase = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    multipleStatements: true
});



module.exports ={connection,connectionDatabase};