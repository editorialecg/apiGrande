const { dictionaryService } = require('../../service/service')

module.exports = {
    async saveWord(req, res) {
        const { word, syn, ant } = req.body

        const data = await dictionaryService(word,syn,ant)

        if (data == 401) return res.status(401).send()

        if(data == 200)return res.status(200).send()
    }
}