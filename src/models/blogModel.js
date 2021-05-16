const mongoose = require('mongoose');

const blog = mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String,
        
    },
    date: {
        type: String
    }

});

module.exports = mongoose.model('blog', blog);