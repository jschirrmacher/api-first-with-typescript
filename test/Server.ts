import 'should'
import supertest from 'supertest'
import Server from '../src/Server'

const request = supertest.agent(Server)

describe('Server', () => {
    describe('GET /', () => {
        it('should run and answer', async () => {
            const response = await request.get('/')
            response.status.should.equal(200)
            response.body.should.deepEqual({ greeting: 'Hello World!' })
        })

        it('should take the username from the query', async () => {
            const response = await request.get('/?username=Joachim')
            response.body.greeting.should.equal('Hello Joachim!')
        })
    })
})
