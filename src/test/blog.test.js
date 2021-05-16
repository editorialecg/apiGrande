const app = require('../app')
const request = require('supertest')

describe('Test POST /blog/saveblog', () => {
    
    test('It should respond with code 200', async done => {
        const response = await request(app)
            .post('/blog/saveblog')
            .send({
                title: 'Otraffgdfarhgsadgdsasfnhggdsgsg',
                content: 'test'
            })
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeDefined()
        done()
    })
})