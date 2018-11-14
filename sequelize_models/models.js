//User Table
const User =(sequelize,type)=>{
    return sequelize.define('User',
        {
            UserId: {
                type: type.STRING,
                primaryKey: true
            },
            User_Name: {
                type: type.STRING,
                primaryKey: false
            },
            User_Address:{
                type:type.STRING,
                primaryKey: false
            },
            User_City:{
                type: type.STRING,
                primaryKey: false
            },
            User_Pincode:{
                type: type.STRING,
                primaryKey: false
            },
            User_Mobile_No:{
                type: type.STRING,
                primaryKey: false
            },
            User_Email:{
                type: type.STRING,
                primaryKey: false
            },
            User_DOB:{
                type: type.DATE,
                primaryKey: false
            }


 },{
            freezeTableName:true
        }
 )
}

//Vendor Table
const Vendor =(sequelize,type)=>{
    return sequelize.define('Vendor',{
        Vendor_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Vendor_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Address:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_City:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Pincode:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Mobile_No:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Email:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_DOB:{
            type:type.DATE,
            primaryKey:false
        },
        Vendor_Vehicle_ID:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Vehicle_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Vehicle_Year:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Vehicle_Type:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Vehicle_Number:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Vehicle_Price_Per_Day:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Vehicle_Image:{
            type:type.BLOB,
            primaryKey:false
        },
        Vendor_Vehicle_Document:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Documents:{
            type:type.STRING,
            primaryKey:false
        }


    },{
        freezeTableName:true
    })
}



//Client Table
const Client =(sequelize,type)=>{
    return sequelize.define('Client',{
        Client_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Client_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Address:{
            type:type.STRING,
            primaryKey:false
        },
        Client_City:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Pincode:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Mobile_No:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Email:{
            type:type.STRING,
            primaryKey:false
        },
        Client_DOB:{
            type:type.DATE,
            primaryKey:false
        },
        Client_Vehicle_ID:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Vehicle_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Vehicle_Year:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Vehicle_Type:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Vehicle_Number:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Vehicle_Price_Per_Day:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Vehicle_Image:{
            type:type.BLOB,
            primaryKey:false
        },
        Client_Vehicle_Document:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Documents:{
            type:type.STRING,
            primaryKey:false
        }


    },{
        freezeTableName:true
    })
}

//Master Vehicle Table
const MasterVehicle =(sequelize,type)=>{
    return sequelize.define('Master Vehicle',{
        Vehicle_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Vehicle_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Image:{
            type:type.BLOB,
            primaryKey:false
        },
        Vehicle_Year:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Details:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Number:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Owners_Name:{
            type:type.STRING,
            primaryKey:false
        },
        City:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Type:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Documents:{
            type:type.STRING,
            primaryKey:false
        },
        Client_Vehicle_ID:{
            type:type.STRING,
            primaryKey:false
        },
        Vendor_Vehicle_ID:{
            type:type.STRING,
            primaryKey:false
        }


    },{
        freezeTableName:true
    })
}

//Four Wheeler Table
const fourWheeler =(sequelize,type)=>{
    return sequelize.define('Four-Wheeler',{
        Vehicle_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Vehicle_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Image:{
            type:type.BLOB,
            primaryKey:false
        },
        Vehicle_Year:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Details:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Number:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Owners_Name:{
            type:type.STRING,
            primaryKey:false
        },
        City:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Type:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Documents:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Price:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Image:{
                type:type.BLOB,
                primaryKey:false
            },
            Vehicle_Year:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Details:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Number:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Owners_Name:{
                type:type.STRING,
                primaryKey:false
            },
            City:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Type:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Documents:{
                type:type.STRING,
                primaryKey:false
            }

    },{
        freezeTableName:true
    })

}

//Two-Wheeler Table
const twoWheeler =(sequelize,type)=>{
    return sequelize.define('Two-Wheeler',
        {
            Vehicle_ID:{
                type:type.STRING,
                primaryKey:true
            },
            Vehicle_Name:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Image:{
                type:type.BLOB,
                primaryKey:false
            },
            Vehicle_Year:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Details:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Number:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Owners_Name:{
                type:type.STRING,
                primaryKey:false
            },
            City:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Type:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Documents:{
                type:type.STRING,
                primaryKey:false
            },
            Vehicle_Price: {
                    type: type.STRING,
                    primaryKey: false
                },
                Vehicle_Image: {
                    type: type.BLOB,
                    primaryKey: false
                },
                Vehicle_Year: {
                    type: type.STRING,
                    primaryKey: false
                },
                Vehicle_Details: {
                    type: type.STRING,
                    primaryKey: false
                },
                Vehicle_Number: {
                    type: type.STRING,
                    primaryKey: false
                },
                Vehicle_Owners_Name: {
                    type: type.STRING,
                    primaryKey: false
                },
                City: {
                    type: type.STRING,
                    primaryKey: false
                },
                Vehicle_Type: {
                    type: type.STRING,
                    primaryKey: false
                },
                Vehicle_Documents: {
                    type: type.STRING,
                    primaryKey: false
                }
        },{
            freezeTableName:true
        })
}

//Feedback Table
const feedback =(sequelize,type)=>{
    return sequelize.define('Feedback',{
        Feedback_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Vehicle_ID:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Name:{
            type:type.STRING,
            primaryKey:false
        },
        UserId:{
            type:type.STRING,
            primaryKey:false
        },
        User_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Feedback_Comment:{
            type:type.STRING,
            primaryKey:false
        }
    },{
        freezeTableName:true
    })
}
//Rating Table
const rating =(sequelize,type)=>{
    return sequelize.define('Rating',{
        Rating_ID:{
            type:type.STRING,
            primaryKey:true
        },
        UserId:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_ID:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_Name:{
            type:type.STRING,
            primaryKey:false
        },
        User_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Rating_Number:{
            type:type.STRING,
            primaryKey:false
        }
    },{
        freezeTableName:true
    })
}

//Purchase Table
const purchase =(sequelize,type)=>{
    return sequelize.define('Purchase',{
        Item_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Quantity:{
            type:type.STRING,
            primaryKey:false
        },
        Price:{
            type:type.STRING,
            primaryKey:false
        },
        Purchase_Type:{
            type:type.STRING,
            primaryKey:false
        },
        Buyer_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Buyer_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Seller_ID:{
            type:type.STRING,
            primaryKey:true
        },
        Seller_Name:{
            type:type.STRING,
            primaryKey:false
        },
        Item_Name:{
            type:type.STRING,
            primaryKey:false
        },
        UserId:{
            type:type.STRING,
            primaryKey:false
        },
        Vehicle_ID:{
            type:type.STRING,
            primaryKey:false
        },
        Accessory_ID:{
            type:type.STRING,
            primaryKey:false
        }

    },{
        freezeTableName:true
    })
}

module.exports ={User,Client,Vendor,MasterVehicle,fourWheeler,twoWheeler,feedback,rating,purchase};