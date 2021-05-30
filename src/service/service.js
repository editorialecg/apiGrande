import { post } from 'axios'
const editorialAppUrl = process.env.SERVER_EDITORIAL

export async function blogupload(title, content) {
    var request = {
        method: 'post',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: {
            title: title,
            content: content
        }
    }
    const result = await post(editorialAppUrl + `/blog/saveblog`, request)
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
export async function dictionaryService(word, syn, ant) {
    var request = {
        method: 'post',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: {
            word: word,
            syn: syn,
            ant: ant
        }
    }
    const result = await post(editorialAppUrl + `/wordsynant/saveword`, request)
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