const {connection} = require('./../connection/connection');

//Create a table
const createTable=(tableName,query)=>{
    const createUserTable = `CREATE TABLE ${tableName} (${query})`;
    connection.query(createUserTable,(err,rows,fields)=>{
        if(err) throw err;
        console.log(`${tableName} Table Created`)
    })

};

//Insert Values in a Table
const insertTableValues =(tableName,query,values)=> {
    const insertQuery = `INSERT INTO ${tableName} (${query}) VALUES (${values})`;
    connection.query(insertQuery, (err, result) => {
        if (err) throw err;
        console.log(`Data Inserted in ${tableName} Table`)
    })
};


//Update a Table
const updateTable =(tableName,column,updateValue,condition,conditionValue)=>{
    const updateQuery= `UPDATE ${tableName} SET ${column}='${updateValue}' WHERE ${condition} = '${conditionValue}' `;
    connection.query(updateQuery,(err,result)=>{
        if(err) throw err;
        console.log(`Updated ${tableName} Table`)
    })
};



//Delete a row from the table
const deleteValues =(tableName,column,value)=>{
  let deleteQuery = `DELETE FROM ${tableName} WHERE ${column}='${value}'`;
  connection.query(deleteQuery,(err,result)=>{
      if(err) throw err;
      console.log(`DELETED ROW from ${tableName} TABLE`)
  })
};

module.exports={createTable,insertTableValues,updateTable,deleteValues};