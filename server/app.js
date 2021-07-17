const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const mongoose = require('mongoose')
const app = express()
const port = 5000

//const Alumni = require('./models/alumniModel')


dotenv.config({path:'./config.env'})

require('./db/conn') 

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('./router/auth'));


app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})