const userModel = require('../../models/usersModel')

export async function newUserDao(name, username, password, department, created_at) {
    return new Promise((resolve, reject) => userModel.create({
        name: name,
        username: username,
        password: password,
        department: department,
        created_at: created_at
    }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    }))
}

export async function findUsername(username) {
    return new Promise((resolve, reject) => userModel.findOne({ username: username }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    }))
}