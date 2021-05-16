const { saveblog, findTitle } = require('./DAO')


module.exports = {
    async saveblog(title, content, date) {
        return await saveblog(title, content, date)
    },

    async findTitle(title){
        return await findTitle(title)
    }

}

