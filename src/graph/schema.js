import { buildSchema } from 'graphql'

export default buildSchema(`
  type Query {
	oneWord(word: String!): [Word!]!
	oneUser(username: String!): User! 
	userByDepartment(department: String!): [User!]!
  }

  type Mutation{
	createWord(word: String!, published: String!, designerby: String!, username: String!): Word!
	newUser(name: String!, lastname: String!, gender: String!, email: String!, username: String!, password: String!, department: String!, role: String!, access: Access): User!
	login(username: String!, password: String!): User!
	oneUser(username: String!): User!
  }

  type Word{
	word: String!
	published: String!
	designerby: String!
	username: String!
	created_at: String!
	updated_at: String!
  }

  type User{
	name: String!
	lastname: String!
	gender: String!
	username: String!
	email: String!
	department: String!
	active: Boolean!
	access: AccessI
	role: String!
	created_at: String!
	updated_at: String!
  }

  type AccessI{
	marketing: Boolean
	rrhh: Boolean
	tech: Boolean
	spanish: Boolean
	ebook: Boolean
  }

  input Access{
	marketing: Boolean
	rrhh: Boolean
	tech: Boolean
	spanish: Boolean
	ebook: Boolean
  }

  type Login{
	token: String
  }
`)