import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const dotenv = require('dotenv').config();
const app = express()

import schema from './graph/schema'
import resolvers from './graph/resolvers'
import Word from './models/find'
import User from './models/usersModel'
import Blog from './models/blogModel'

import { graphqlHTTP } from 'express-graphql'


// Middleware
app.use(morgan('dev'))
app.use(cors())

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// DataBase
//const db = require('./db/db')

// Routes
//app.use(require('./routes/routes'))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  context: {
      Word,
      User,
      Blog
  },
  graphiql: true,
}));



module.exports = app