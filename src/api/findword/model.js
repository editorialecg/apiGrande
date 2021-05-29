import { createWord as _createWord, findWord as _findWord, findOneByWord as _findOneByWord } from './DAO'

export async function createWord(word, published, designerby) {
    return await _createWord(word, published, designerby)
}
export async function findWord(word) {
    return await _findWord(word)
}
export async function findOneByWord(word) {
    return await _findOneByWord(word)
}