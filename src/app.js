import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
const app = express()
/* const http = require("http").createServer(app);
const options = {  };
const io = require("socket.io")(http, options);

io.on("connection", socket => {console.log('Connected')}); */
import schema from './graph/schema'
import resolvers from './graph/resolvers'
import Word from './models/find'
import User from './models/usersModel'

require('dotenv').config();

//Setting
app.set('port', process.env.PORT); // Set Port

// Middleware
app.use(morgan('dev'))
app.use(cors({
	origin: '*'
}))

app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

// DataBase
const db = require('./db/db')


app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolvers,
	context: {
		Word,
		User,

	},
	graphiql: true,
}));

export default app
