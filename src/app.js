import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
require('dotenv').config();
const app = express()

import schema from './graph/schema'
import resolvers from './graph/resolvers'
import Word from './models/find'
import User from './models/usersModel'
import Blog from './models/blogModel'

// Middleware
app.use(morgan('dev'))
app.use(cors({
  origin: [process.env.CORS, process.env.CORS2]
}))

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



export default app