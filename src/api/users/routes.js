const express = require('express')
const router = express.Router()
const cors = require('cors')

const opt = {
    origin: [process.env.CORS]
}

const { newUser } = require('./controller')

router.post('/newuser', cors(opt), (req, res) => {
    newUser(req, res)
})

module.exports = router