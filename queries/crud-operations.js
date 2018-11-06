const {database} = require('./database-creation')
const {connection} = require('./../connection/connection');
const{createTable,insertTableValues,updateTable,deleteValues} = require('./table-creation');

connection.connect( (error,result)=>{
    if(error) throw error;
    console.log('CONNECTION SUCCESSFUL');

});



let tableCreationQuery = "Item_Id int NOT NULL,QTY int NOT NULL,Price DOUBLE NOT NULL,Purchase_Type varchar(20) NOT NULL," +
    "Buyer_Id int NOT NULL,Buyer_Name varchar(50) NOT NULL,Seller_Id int NOT NULL,Seller_Name varchar(50) NOT NULL," +
    "Item_Name varchar(50) NOT NULL, UserId int NOT NULL,Vehicle_Id int,Accessory_Id int,PRIMARY KEY(Item_Id,Buyer_Id,Seller_Id),FOREIGN KEY(UserId) REFERENCES User(UserId)," +
    "FOREIGN KEY(Vehicle_Id) REFERENCES Master_Vehicle(Vehicle_Id),FOREIGN KEY(Accessory_Id) REFERENCES Accessories(Accessory_Id)"
let tableName ="User";

//createTable(tableName,tableCreationQuery)


let insertColumns ="id,name";
let insertValues ="1,'test'";

//insertTableValues(tableName,insertColumns,insertValues)

let updateColumn = "name";
let updateValue ="BEAST";
let updateCondition ="id";
let updateConditionValue ="1";

//updateTable(tableName,updateColumn,updateValue,updateCondition,updateConditionValue)
let deleteColoumn ="name";
let deleteValue = "BEAST";

//deleteValues(tableName,deleteColoumn,deleteValue);


//connection.query('DROP TABLE test2')
// connection.query('SELECT * from User', (err, res) => {
//     if (err) throw err
//     var d = new Date(res[0].User_DOB);
//     d.setMinutes( d.getMinutes() + 330 );
//     console.log(d)
// })


connection.query(`SELECT * FROM ${tableName}`,(err,result)=>{
    if(err) throw err;
    console.log(result)
});

connection.end();