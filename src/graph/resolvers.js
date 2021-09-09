import { getTime, encryptPassword, comparePassword } from '../microservice/micro'
import { newUserModel, findUsername, findDepartment, updated_at } from '../api/users/model'
import { findOneByWord, createWord, findWord } from '../api/findword/model'


export default {

	createWord: async (parent, args, { Word }) => {
		const find = await findOneByWord(parent.word)
		const date = getTime()
		if (!find) {
			const create = await createWord(parent.word, parent.published, parent.designerby, parent.username, date, date)
			return create
		}
		return null
	},

	oneWord: async (parent, args, { Word }, info) => {
		const words = await findWord(parent.word)
		
		if(!words) return null

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
				parent.gender,
				parent.email,
				parent.username,
				password,
				parent.department,
				parent.role,
				true,
				parent.access,
				date,
				date
			)
			return user

		}

	},

	oneUser: async (parent, args, { User }) => {
		const find = await findUsername(parent.username)

		if (!find) return null

		return await find

	},

	userByDepartment: async (parent, args, { User }) => {
		const find = await findDepartment(parent.department)
		if (!find) return null

		return find
	},

	login: async (parent, args, { User }) => {
		const find = await findUsername(parent.username)
		if (!find) return null

		if (find.active == true) {
			if (comparePassword(parent.password, find.password)) {

				await updated_at(find.username, getTime())

				return find
			}
		}else{

			return null
		}

	}
}