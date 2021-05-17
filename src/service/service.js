const axios = require('axios')


const editorialAppUrl = process.env.SERVER_EDITORIAL

module.exports = {
    async blogupload(title,content) {
        var request = {
            method:'post',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: {
                title: title,
                content: content
            }
        }
        const result = await axios.post(editorialAppUrl + `/blog/saveblog`,request)
            .then(response => response.json())
            .then(response => {
                return response
            }).catch(
                err => {
                    return err
                }
            )
        
        
        return result.statusCode
    
    }
}