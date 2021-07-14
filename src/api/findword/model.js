import { createWord as _createWord, findWord as _findWord, findOneByWord as _findOneByWord } from './DAO'

export async function createWord(word, published, designerby, username, created_at, updated_at) {
    return await _createWord(word, published, designerby, username, created_at, updated_at)
}
export async function findWord(word) {
    return await _findWord(word)
}
export async function findOneByWord(word) {
    return await _findOneByWord(word)
}