const moment = require('moment')
import { compareSync, genSaltSync, hashSync } from 'bcrypt'

export function getTime(){
    return moment().format('MMMM Do YYYY, h:mm:ss a')
}

export async function comparePassword(password, passwordUser) {
    return compareSync(password, passwordUser)
}

export async function encryptPassword(password){
    const saltRounds = 10; // SaltRound to encrypt password
    const salt = genSaltSync(saltRounds); // Generate Salt 
    const hash = hashSync(password, salt); // Encrypt password

    return hash
}