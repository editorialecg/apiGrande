const express = require('express')
const router = express.Router()

const find = require('../api/findword/routes')
const blog = require('../api/blog/routes')

router.use('/find', find)
router.use('/blog', blog)

module.exports = router