const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const user = require('./models').user

app.use(bodyParser.json())


app.listen(5000,()=> console.log('Listening on port 5000'));