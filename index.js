// install nodemon globally as a dev dependancy
// because when we push the code on production server, it downloads all dependacies except dev dependancies  
// and we don't need nodemon on production server.

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/testDB'  // the url to connect to mongoDB on localhost
const app = express()

mongoose.connect(url,{useNewUrlParser: true})    //set usenewurlparser to true to suppress warning of deprecated usage.
const con = mongoose.connection


con.on('open', ()=>console.log('connected to MongoDB'))

app.use(express.json())  // telling express to use json middleware otherwise it shows error on post request.

const laptopRouter = require('../express+mongodb/routes/laptops')
app.use('/laptop', laptopRouter)  // use laptops.js file for all routes to /laptop

app.listen(9000, ()=>console.log('server started'))