const {connection} = require('./../connection/connection')
connection.connect();



// var query = "CREATE TABLE products (id int NOT NULL,price int,qty int,name varchar(50),FOREIGN KEY(id) REFERENCES Users(id))"


// var query = "INSERT INTO products (id,name,price,qty) VALUES ('4','Tablet','5000','10')";
// var query1 ="DELETE FROM Users where id='3'"
// connection.query(query1,(error,results,fields)=>{
//     if(error) throw error;
//     console.log('Data Inserted')
// })

// let query ="CREATE TABLE Users (id int AUTO_INCREMENT PRIMARY KEY,name varchar(50))"
// connection.query(query,(error,result)=>{
//     if(error) throw error;
//     console.log('TABLE CREATED')
//
// })

// let query1 = "INSERT INTO Users (name) VALUES ('TEST')"
// connection.query(query1,(err,result)=>{
//     if(err) throw err;
//     console.log('DATA INSERTED')
// })

//
// connection.query('DROP TABLE Users',(err,result)=>{
//     if(err) throw err;
//     console.log('TABLE DROPPED')
// });
//

// connection.query('SELECT * from Users', function (error, results, fields) {
//     if (error) throw error;
//     for(var name in results )
//     {
//         console.log(results)
//     }
// });
//
// var num =5
// var query = `INSERT INTO Users (id,name) VALUES (${num},'TEST')`
// var query1 =`INSERT INTO products(id,price,qty,name) VALUES(${num},100,10,'LAPTOP')`
//
// function test(query,query1) {
//     connection.query(query, (err, result) => {
//         if (err) throw err;
//         console.log('DATA INSERTED IN USERS')
//
//     })
//
//     connection.query(query1, (error) => {
//         if (error) throw error
//         console.log('DATA INSERTED IN PRODUCTS')
//     })
//
// }
//
// test(query,query1)
//
// var query3 = "SELECT Users.name AS USER_NAME , products.name AS item FROM Users JOIN products ON Users.id = products.id"
//
// connection.query(query3,(error,result)=>{
//     if(error) throw error
//     console.log(result)
// })



//Vendor Table
let tableCreationQuery = "Vendor_Id int NOT NULL,Vendor_Name varchar(50) NOT NULL,Vendor_Address varchar(100) NOT NULL,Vendor_City varchar(20) NOT NULL,Vendor_Pincode DOUBLE NOT NULL," +
    "Vendor_Mobile_No DOUBLE NOT NULL,Vendor_Email varchar(50) NOT NULL,Vendor_DOB DATE NOT NULL,Vendor_Vehicle_Name varchar(50) NOT NULL,Vendor_Vehicle_Year DATE NOT NULL," +
    "Vendor_Vehicle_Type varchar(10) NOT NULL,Vendor_Vehicle_Number varchar(20) NOT NULL,Vendor_Price_Per_Day DOUBLE NOT NULL,Vendor_Vehicle_Image BLOB NOT NULL," +
    "Vendor_Vehicle_Documents BLOB NOT NULL,Vendor_Documents BLOB NOT NULL,Date DATE NOT NULL,Vendor_Vehicle_Id int PRIMARY KEY NOT NULL,FOREIGN KEY(Vendor_Id) REFERENCES User(UserId)";

//Client Table
let tableCreationQuery = "Client_Id int NOT NULL,Client_Name varchar(50) NOT NULL,Client_Address varchar(100) NOT NULL,Client_City varchar(20) NOT NULL,Client_Pincode DOUBLE NOT NULL," +
    "Client_Mobile_No DOUBLE NOT NULL,Client_Email varchar(50) NOT NULL,Client_DOB DATE NOT NULL,Client_Vehicle_Name varchar(50) NOT NULL,Client_Vehicle_Year DATE NOT NULL," +
    "Client_Vehicle_Type varchar(10) NOT NULL,Client_Vehicle_Number varchar(20) NOT NULL,Client_Price_Per_Day DOUBLE NOT NULL,Client_Vehicle_Image BLOB NOT NULL," +
    "Client_Vehicle_Documents BLOB NOT NULL,Client_Documents BLOB NOT NULL,Date DATE NOT NULL,Client_Vehicle_Id int PRIMARY KEY NOT NULL,FOREIGN KEY(Client_Id) REFERENCES User(UserId)";


//four_wheeler vehicle
let tableCreationQuery = "Vehicle_Id int NOT NULL,Vehicle_Name varchar(50) NOT NULL,Vehicle_Image BLOB NOT NULL,Vehicle_Year DATE NOT NULL," +
    "Vehicle_Details varchar(100) NOT NULL,Vehicle_Number varchar(20) NOT NULL,Vehicle_Price DOUBLE NOT NULL,Vehicle_Owners_Name varchar(50) NOT NULL," +
    "City varchar(20) NOT NULL,Vehicle_Type varchar(20) NOT NULL,Vehicle_Documents BLOB NOT NULL,Date DATE NOT NULL," +
    "FOREIGN KEY(Vehicle_Id) REFERENCES Master_Vehicle(Vehicle_Id)"

//two_wheeler
let tableCreationQuery = "Vehicle_Id int NOT NULL,Vehicle_Name varchar(50) NOT NULL,Vehicle_Image BLOB NOT NULL,Vehicle_Year DATE NOT NULL," +
    "Vehicle_Details varchar(100) NOT NULL,Vehicle_Number varchar(20) NOT NULL,Vehicle_Price DOUBLE NOT NULL,Vehicle_Owners_Name varchar(50) NOT NULL," +
    "City varchar(20) NOT NULL,Vehicle_Type varchar(20) NOT NULL,Vehicle_Documents BLOB NOT NULL,Date DATE NOT NULL," +
    "FOREIGN KEY(Vehicle_Id) REFERENCES Master_Vehicle(Vehicle_Id)"


//master vehicle

let tableCreationQuery = "Vehicle_Id int PRIMARY KEY NOT NULL,Vehicle_Name varchar(50) NOT NULL,Vehicle_Image BLOB NOT NULL,Vehicle_Year DATE NOT NULL," +
    "Vehicle_Details varchar(100) NOT NULL,Vehicle_Number varchar(20) NOT NULL,Vehicle_Price DOUBLE NOT NULL,Vehicle_Owners_Name varchar(50) NOT NULL," +
    "City varchar(20) NOT NULL,Vehicle_Type varchar(20) NOT NULL,Vehicle_Documents BLOB NOT NULL,Date DATE NOT NULL,Client_Vehicle_Id int, Vendor_Vehicle_Id int," +
    "FOREIGN KEY(Client_Vehicle_id) REFERENCES Client(Client_Vehicle_Id),FOREIGN KEY(Vendor_Vehicle_Id) REFERENCES Vendor(Vendor_Vehicle_Id)"

//accessories
let tableCreationQuery = "Accessory_Id int PRIMARY KEY NOT NULL,Accessory_Name varchar(50) NOT NULL,Accessory_Image BLOB NOT NULL,"  +
    "Accessory_Details varchar(100) NOT NULL,Accessory_Price DOUBLE NOT NULL,Accessory_Use varchar(50)"
//feedback
let tableCreationQuery = "Feedback_Id int PRIMARY KEY NOT NULL,Vehicle_Id int NOT NULL,Vehicle_Name varchar(50) NOT NULL,UserId int NOT NULL," +
    "User_Name varchar(50) NOT NULL,Feedback_Comment varchar(200) NOT NULL, Date DATE NOT NULL,FOREIGN KEY(Vehicle_Id) REFERENCES Master_Vehicle(Vehicle_id)," +
    "FOREIGN KEY(UserId) REFERENCES Master_Vehicle(Vehicle_Id) "
//rating
let tableCreationQuery = "Rating_Id int PRIMARY KEY NOT NULL,Vehicle_Id int NOT NULL,Vehicle_Name varchar(50) NOT NULL,UserId int NOT NULL," +
    "User_Name varchar(50) NOT NULL,Rating_Number int NOT NULL, Date DATE NOT NULL,FOREIGN KEY(Vehicle_Id) REFERENCES Master_Vehicle(Vehicle_id)," +
    "FOREIGN KEY(UserId) REFERENCES Master_Vehicle(Vehicle_Id) "


connection.end();