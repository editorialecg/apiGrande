import { Schema, model } from 'mongoose'

const user = Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String,
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    department: {
        type: String
    },
    active: {
        type: Boolean
    },
    access: {
        marketing: {type: Boolean},
        rrhh: {type: Boolean},
        tech: {type: Boolean},
        spanish: {type: Boolean}
    },
    role: {
        type: String
    },
    created_at: {
        type: String
    },
    updated_at: {
        type: String
    }
})

const User = model('users', user)

export default User