
import User from '../../models/usersModel'

export async function newUserDao(name,lastname, gender, email, username, password, department, role, active, access, created_at, updated_at) {
    return new Promise((resolve, reject) => User.create({
        name: name,
        lastname: lastname,
        gender: gender,
        email: email,
        username: username,
        password: password,
        department: department,
        role: role,
        active: active,
        access: access,
        created_at: created_at,
        updated_at: updated_at
    }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    }))
}

export async function findUsernameDao(username) {
    return new Promise((resolve, reject) => User.findOne({ username: username }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    }) )
}

export async function updated_atDao(username, time) {
    return new Promise((resolve, reject) => User.updateOne({ username: username }, { updated_at: time }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    }))
}

export async function findDepartmentDao(department){
    return new Promise((resolve,reject) => User.find({department: department}, (err,data) =>{
        if(err) return reject(err)
        resolve(data)
    }))
}