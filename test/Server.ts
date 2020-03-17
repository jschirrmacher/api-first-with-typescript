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

    describe('POST /', () => {
        it('should return an answer', async () => {
            const response = await request.post('/?question=' + encodeURIComponent('What time is it?'))
            response.status.should.equal(200)
            response.body.should.deepEqual({answer: 'I don\'t know'})
        })

        it('should require a question parameter', async () => {
            const response = await request.post('/')
            response.status.should.equal(400)
            response.body.should.have.property('errors')
            response.body.errors[0].message.should.equal('should have required property \'question\'')
        })
    })
})
