const express = require('express')
const router = express.Router()
const cors = require('cors')

const opt = {
    origin: [process.env.CORS]
}

const { saveblog } = require('./controller')

router.post('/saveblog',cors(opt), (req,res) =>{
    saveblog(req,res)
})

module.exports = router;