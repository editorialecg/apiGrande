import { getTime, encryptPassword, comparePassword } from '../microservice/micro'
import { newUserModel, findUsername } from '../api/users/model'
import { findOneByWord, createWord, findWord } from '../api/findword/model'


export default {

	createWord: async (parent, args, { Word }) => {

		const find = await findOneByWord(parent.word)
		if (!find) {
			const create = await createWord(parent.word, parent.published, parent.designerby)
			return create
		}
		return null
	},

	oneWord: async (parent, args, { Word }) => {
		const words = await findWord(parent.word)
		return words
	},

	newUser: async (parent, args, { User }) => {
		const date = getTime()
		const find = await findUsername(parent.username)
		const password = await encryptPassword(parent.password)

		if (!find) {
			const user = await newUserModel(
				parent.name,
				parent.lastname,
				parent.email,
				parent.username,
				password,
				parent.department,
				true,
				parent.role,
				date,
				date
			)
			return user

		}

		return null
	},

	oneUser: async (parent, args, { User }) => {
		/* const find = await findUsername(parent.username)
		if (find) {
			return find
		}
		return null */
		return {
			name: 'Ali R.',
			lastname: 'Solorzano A.',
			email: 'ali@gmail.com',
			username: 'alisolorzanove',
			department: 'Tecnologia',
			active: true,
			role: 'CTO',
			created_at: '999',
			updated_at: '999',

		}
	},

	login: async (parent, args, { User }) => {
		const find = await findUsername(parent.username)

		if (!find) return null

		if (comparePassword(parent.password, find.password)) return find

		return null
	}
}