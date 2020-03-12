import 'should'
import supertest from 'supertest'
import Server from '../src/Server'

describe('Server', () => {
    it('should run and answer on `GET /`', async () => {
        const request = supertest.agent(Server)
        const response = await request.get('/')
        response.status.should.equal(200)
        response.body.should.deepEqual({greeting: 'Hello World!'})
    })
})
