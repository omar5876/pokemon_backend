
const app = require('../../src/app')
const request = require('supertest')


describe('GET /pokemon', () => {
    it('should return a status 200', async() => {
       let response = await request(app).get('/pokemon').send();
       expect(response.status).toBe(200)
    })
})