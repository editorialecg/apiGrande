import { Schema, model } from 'mongoose'

const find = Schema({
    word: {
        type: String
    },
    published: {
        type: String
    },
    designerby: {
        type: String
    },
    username: {
        type: String
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String,
    }
})

const Word = model('worduploads', find)

export default Word