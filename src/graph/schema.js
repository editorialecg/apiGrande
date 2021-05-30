import { buildSchema } from 'graphql'

export default buildSchema(`
  type Query {
    oneWord(word: String!): Word!
    oneUser(username: String!): User! 
    
  }

  type Mutation{
    createWord(word: String! published: String! designerby: String!): Word!
    newUser(name: String! lastname: String! email: String! username: String! password: String! department: String! role: String!): User!
    login(username: String! password: String!):User!
  }

  type Word{
      word: String!
      published: String!
      designerBy: String!
  }

  type User{
    name: String!
    lastname: String!
    username: String!
    email: String!
    department: String!
    active: Boolean!
    role: String!
    created_at: String!
    updated_at: String!
  }
`)