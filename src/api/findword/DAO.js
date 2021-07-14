import Word from '../../models/find'

export async function createWord(word, published, designerby, username, created_at, updated_at) {
	return new Promise((resolve, reject) => Word.create({
		word: word,
		published: published,
		designerby: designerby,
		username: username,
		created_at: created_at,
		updated_at: updated_at
	}, (err, data) => {
		if (err) return reject(err)
		resolve(data)
	}))
}
export async function findWord(word) {
	return new Promise((resolve, reject) => Word.find({ word: word }, (err, data) => {
		if (err) return reject(err)
		resolve(data)
	}))
}
export async function findOneByWord(word) {
	return new Promise((resolve, reject) => Word.findOne({ word: word }, (err, data) => {
		if (err) return reject(err)
		resolve(data)
	}))
}