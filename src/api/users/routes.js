const express = require('express')
const router = express.Router()
const cors = require('cors')

const opt = {
    origin: [process.env.CORS]
}

const { newUser, login, profile } = require('./controller')

router.post('/newuser', cors(opt), (req, res) => {
    newUser(req, res)
})

router.post('/login', cors(opt), (req, res) => {
    login(req, res)
})

router.get('/profile/:username', cors(opt), (req, res) => {
    profile(req, res)
})

module.exports = router