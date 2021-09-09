import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
const app = express()
const http = require("http").createServer(app);
const opt = {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		allowedHeaders: ["content-type"]
	}
}
const io = require("socket.io")(http, opt);

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

io.on("connect", socket => {
	console.log('Connected ', socket.id)
	console.log(socket)
	io.emit('active')
	
})

export default http
