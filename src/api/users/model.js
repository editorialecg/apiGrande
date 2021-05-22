const { newUserDao, findUsername } = require('./DAO')

export async function newUserModel(name, username, password, department, created_at) {
    return await newUserDao(name, username, password, department, created_at)
}

export async function findUsername(username){
    return await findUsername(username)
}