const find = require('../../models/find')

module.exports = {
    async createWord(word, published, designerby) {
        return new Promise((resolve, reject) => find.create({
            word: word,
            published: published,
            designerby: designerby
        }, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        }))
    },

    async findWord(word) {
        return new Promise((resolve, reject) => find.find({ word: word }, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        }))
    },

    async findOneByWord(word){
        return new Promise((resolve,reject) => find.findOne({word:word}, (err,data) =>{
            if(err) return reject(err)
            resolve(data)
        }))
    }
}