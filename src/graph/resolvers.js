import { getTime } from '../microservice/micro'
import { newUserModel, findUsername } from '../api/users/model'
import { findOneByWord, createWord, findWord } from '../api/findword/model'

export default {
    oneWord: async (parent, args, { Word }) => {
        const words = await findWord(args.word)
        return words
    },

    oneUser: async (parent, args, { User }) => {
        const find = await findUsername(args.username)
        if(find){
            return find
        }
        return false
        /* return {
            name: 'Ali Solozano',
            username: 'alisolorzano',
            department: 'Tecnologia',
            active: true,
            role: 'CTO',
            created_at: '999',
            updated_at: '999',
            
        } */
    },

    newUser: async (parent, args, { User }) => {
        const date = getTime()
        const find = await findUsername(args.username)
        
        if(!find){
            const user = await newUserModel(
                args.name, 
                args.username, 
                args.department, 
                true, 
                args.role, 
                date, 
                date
            )
            return user

        }

        return false
    },

    login: async (parent, args, { User }) => {
        return args.username
    }
}