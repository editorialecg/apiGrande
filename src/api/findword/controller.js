const findModel = require('./model')

module.exports = {
    async createWord(req, res) {
        const { word, published, designerby } = req.body

        if (!word || !published || !designerby) return res.status(400).send()

        const findWord = await findModel.findOneByWord(word)

        if (!findWord) {
            await findModel.createWord(word, published, designerby)

            return res.status(200).json({msg: 'Save'})
        }

        return res.status(401).send()

    },

    async findWord(req, res) {
        const { word } = req.params

        if (!word) return res.status(400).send()

        const findword = await findModel.findWord(word)

        if (!findword) return res.status(404).send()

        return res.status(200).send(findword)

    }
}