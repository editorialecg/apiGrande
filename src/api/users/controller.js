const { newUserModel, findUsername, updated_at } = require('./model')
const { sendDataLogin } = require('./DTO')
const { getTime } = require('../../microservice/micro')

export async function newUser(req, res) {
    const { name, username, password, department } = req.body

    const created_at = getTime()
    const updated_at = getTime()

    if (!name || !username || !password || !department) return res.status(400).send()

    const find = await findUsername(username)

    if (find) return res.status(401).send()

    await newUserModel(name, username, password, department, created_at, updated_at)

    const findSave = await findUsername(username)

    if (findSave) return res.status(200).send()

}

export async function login(req, res) {
    const { username, password } = req.body

    if (!username || !password) return res.status(400).send()

    const find = await findUsername(username)

    if (!find) return res.status(404)

    if (!password) return res.status(401).send() // Need Bcrypt

    const time = await updated_at(username, getTime())

    const send = await sendDataLogin(find.name, username, find.department, time)

    return res.status(200).json({ send })

}