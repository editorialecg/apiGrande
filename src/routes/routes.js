const express = require('express')
const router = express.Router()

const find = require('../api/findword/routes')
const blog = require('../api/blog/routes')
const dictionary = require('../api/dictionary/routes')
const users = require('../api/users/routes')


router.use('/find', find)
router.use('/blog', blog)
router.use('/dictionary', dictionary)
router.use('/users', users)

module.exports = router