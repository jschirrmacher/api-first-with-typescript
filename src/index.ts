import express from 'express'
import ApiUI from './api-ui'

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
ApiUI(app)

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
