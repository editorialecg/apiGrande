const { newUserDao, findUsername, updated_at } = require('./DAO')

export async function newUserModel(name, username, password, department, created_at, updated_at) {
    return await newUserDao(name, username, password, department, created_at, updated_at)
}

export async function findUsername(username) {
    return await findUsername(username)
}

export async function updated_at(username, time) {
    return await updated_at(username, time)
}