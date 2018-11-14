
const Test =(sequelize,type)=>{

    return sequelize.define('test',
        {
            id: {
                type: type.INTEGER,
                primaryKey: true
            },
            name: {
                type: type.STRING,
                primaryKey: false
            }

}

    )
}
module.exports ={Test}