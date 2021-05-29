import { buildSchema } from 'graphql'

export default buildSchema(`
  type Query {
    oneWord(word: String!): Word!
    oneUser(username: String!): User! 
    
  }

  type Mutation{
    newUser(name: String!, username: String!, department: String!, role: String!): User!
    login(username: String!):User!
  }

  type Word{
      word: String!
      published: String!
      designerBy: String!
  }

  type User{
    name: String!
    username: String!
    department: String!
    active: Boolean!
    role: String!
    created_at: String!
    updated_at: String!
  }
`)