const { saveblog, findTitle } = require('./model')
const moment = require('moment')
const { blogupload } = require('../../service/service')

module.exports = {
    async saveblog(req, res) {
        const { title, content } = req.body

        if (!title || !content) return res.status(400).send()

        const data = await blogupload(title, content)

        if (data == 401) return res.status(401).send()

        return res.status(200).send()
    }
}