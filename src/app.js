const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')  
const cors = require('cors')
// Setting


// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// DataBase
const db = require('./db/db')

// Routes
app.use(require('./routes/routes'))

module.exports = app