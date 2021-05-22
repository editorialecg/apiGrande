const express = require('express')
const router = express.Router()
const cors = require('cors')

const opt = {
    origin: [process.env.CORS]
}

const { saveWord } = require('./controller')

router.post('/saveword', cors(opt), (req, res) => {
    saveWord(req, res)
})

module.exports = router