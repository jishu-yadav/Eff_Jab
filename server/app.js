const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const mongoose = require('mongoose')
const app = express();
const port = 5000

//const Alumni = require('./models/alumniModel')

dotenv.config({path:'./config.env'})
require('./db/conn') 

//Middleware
app.use(express.json())
//app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))
app.use(require('./router/auth'));


//app.use(require('./router/auth'));

const middleware=(req,res,next)=>{
    console.log(`Hello my middleware`);
    next();
}

 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})