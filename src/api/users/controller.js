const { newUserModel, findUsername } = require('./model')
const moment = require('moment')


export async function newUser(req, res) {
    const { name, username, password, department } = req.body

    const created_at = moment.format('MMMM Do YYYY, h:mm:ss a')

    if (!name || !username || !password || !department) return res.status(400).send()

    const find = await findUsername(username)

    if(find) return res.status(401).send()

    await newUserModel(name, username, password, department, created_at)

    const findSave = await findUsername(username)

    if(findSave) return res.status(200).send()

}