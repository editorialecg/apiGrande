const { newUserDao, findUsernameDao, updated_atDao } = require('./DAO')

export async function newUserModel(name, username, password, department, role, active, created_at, updated_at) {
    return await newUserDao(name, username, password, department, role, active, created_at, updated_at)
}

export async function findUsername(username) {
    return await findUsernameDao(username)
}

export async function updated_at(username, time) {
    return await updated_atDao(username, time)
}