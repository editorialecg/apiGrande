const express = require('express')
const router = express.Router()

const find = require('../api/findword/routes')

router.use('/find',find)

module.exports = router