const express = require('express')
const router = express.Router()
const cors = require('cors')

const controller = require('./controller')

const corsOptions = {
    origin: [process.env.CORS,process.env.CORS2],
        
}

router.get('/findword/:word', cors(corsOptions), (req,res) =>{
    controller.findWord(req,res)
})

router.post('/createword', cors(), (req,res) =>{
    controller.createWord(req,res)
})

module.exports = router