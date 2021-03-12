const mongoose = require('mongoose')

const find = mongoose.Schema({
    word: {
        type: String
    },
    published: {
        type: String
    },
    designerby:{
        type: String
    }
})

module.exports = mongoose.model('word', find)