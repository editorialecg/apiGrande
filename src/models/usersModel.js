const mongoose = require('mongoose')

const user = mongoose.Schema({
    name:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    },
    department:{
        type: String
    },
    created_at:{
        type: String
    }
})

module.exports = mongoose.model('users',user)