const { newUserDao, findUsernameDao, updated_atDao, findDepartmentDao } = require('./DAO')

export async function newUserModel(name, lastname, gender, email, username, password, department, role, active, access, created_at, updated_at) {
    return await newUserDao(name, lastname, gender, email, username, password, department, role, active, access, created_at, updated_at)
}

export async function findUsername(username) {
    return await findUsernameDao(username)
}

export async function updated_at(username, time) {
    return await updated_atDao(username, time)
}

export async function findDepartment(department){
    return await findDepartmentDao(department)
}