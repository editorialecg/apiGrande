const blogModel = require('../../models/blogModel')

module.exports = {
    async saveblog(title, content, date) {
        return new Promise((resolve, reject) => blogModel.create({
            title: title, content: content, date: date
        }), (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    },

    async findTitle(title) {
        return new Promise((resolve, reject) => blogModel.findOne({ title: title }, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        }))
    }

}
