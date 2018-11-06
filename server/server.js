const express = require('express')
const path=require('path');
const publicPath = path.join(__dirname, '../public');
var app = express();

const http = require('http');
var server = http.createServer(app);

app.use(express.static(publicPath))
server.listen(3000,(err,res)=>{
    if(err) throw err
    console.log('Server Started at Port 3000')
})