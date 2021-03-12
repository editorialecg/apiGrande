const dao = require('./DAO')

module.exports = {
    async createWord(word, published, designerby) {
        return await dao.createWord(word, published, designerby)
    },

    async findWord(word){
        return await dao.findWord(word)
    },

    async findOneByWord(word){
        return await dao.findOneByWord(word)
    }
}