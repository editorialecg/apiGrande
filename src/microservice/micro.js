const momet = require('moment')

export async function getTime(){
    return moment().format('MMMM Do YYYY, h:mm:ss a')
}