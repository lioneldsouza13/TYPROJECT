const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app =express();
const cors = require('cors')
const twoWheeler = require('./models').twoWheeler
const fourWheeler = require('./models').fourWheeler
const vehicle = require('./models').vehicle;
app.use(bodyParser.json())
app.use(cors());
app.get('/fetch-vehicle-type',(req,res)=>{
    var vehicle_type=["Two-Wheelers","Four-Wheelers"];
    res.status(200).send(vehicle_type)
})

app.get('/fetch-twoWheeler-fuel',(req,res)=>{
var fuel = ["Petrol"]
    res.send(fuel)
})

app.get('/fetch-fourWheeler-fuel',(req,res)=>{
    var fuel = ["Petrol","CNG","Diesel"]
    res.send(fuel)
})
app.get('/fetch-year',(req,res)=>{
    var year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
    res.send(year)
})
app.get('/fetch-registration-state',(req,res)=>{
    var registration_state=["Andhra Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Karnataka"]
    res.send(registration_state)
})
app.get('/fetch-km_driven',(req,res)=>{
    var km_driven=["0-10000","10000-20000","20000-30000","30000-40000","40000-50000","50000-60000","70000-80000","80000-900000","90000-100000"]
    res.send(km_driven)
})

app.get('fetch-twoWheeler-brand',(req,res)=>{
    var brand=["Aprilia","Bajaj","Benelli","Hero","Honda","KTM","Others"]
    res.status(200).send(brand)
})

app.get('fetch-fourWheeler-brand',(req,res)=>{
    var brand =["Audi","BMW","Honda","Mercedes-Benz","Maruti Suzuki","Others"]
    res.status(200).send(brand)
})


app.post('/fetch-twoWheeler-model',(req,res)=>{
   var model =[];
   twoWheeler.findAll({attributes:['model'],where:{brand:`${req.body.brand}`}}).then((result)=>{
        for(var i=0;i<result.length;i++)
        {
            model.push(result[i].model)
        }
       res.send(model)
   }).catch(e=>res.status(400).send(e))
})

app.post('/fetch-fourWheeler-model',(req,res)=>{
    var model =[];
    fourWheeler.findAll({attributes:['model'],where:{brand:`${req.body.brand}`}}).then((result)=>{
        for(var i=0;i<result.length;i++)
        {
            model.push(result[i].model)
        }
        res.send(model)
    }).catch(e=>res.status(400).send(e))
})


app.post('/store-vehicle-details',(req,res)=>{
        var vehicles = req.body.vehicles
    vehicle.create({
        vehicle_type:vehicles.type,
        brand:vehicles.brand,
        model:vehicles.model,
        fuel_type:vehicles.fuel,
        year:vehicles.year,
        registration_state:vehicles.registration_state,
        km_driven:vehicles.km_driven,
        number_plate:vehicles.number_plate,
        price:vehicles.price,
        image:vehicles.image,
        documents:vehicle.documents
    }).then((result)=>{
        console.log('Data Inserted')
    }).catch(e=>console.log(e))


})

app.get('/fetch-twoWheeler-details',(req,res)=>{
   var vehicle_details=[]
    vehicle.findAll({attributes:['vehicle_id','vehicle_type','brand','model','fuel_type','year','registration_state','km_driven','number_plate','price_per_day','image','documents','price','status'],where:{vehicle_type:'Two-Wheelers'}}).then((result)=>{
        for(var i=0;i<result.length;i++)
        {
            vehicle_details.push(result[i])
        }

        res.send(vehicle_details)
    })
})
app.get('/fetch-fourWheeler-details',(req,res)=>{
    var vehicle_details=[]
    vehicle.findAll({attributes:['vehicle_id','vehicle_type','brand','model','fuel_type','year','registration_state','km_driven','number_plate','price_per_day','image','documents','price','status'],where:{vehicle_type:'Four-Wheelers'}}).then((result)=>{
        for(var i=0;i<result.length;i++)
        {
            vehicle_details.push(result[i])
        }

        res.send(vehicle_details)
    })
})


app.listen(5000,()=> console.log('Listening on port 5000'));