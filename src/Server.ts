import express from 'express'
import ApiUI from './api-ui'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
ApiUI(app)

export default app
