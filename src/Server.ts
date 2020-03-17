import express, { Request, Response } from 'express'
import ApiUI from './api-ui'
import { initialize } from 'express-openapi'
import operations from './Operations'

const app = express()

initialize({
    apiDoc: 'OAS3.yaml',
    app,
    operations
})
ApiUI(app)

app.use((error: {status: number}, req: Request, res: Response, next: Function) => {
    res.status(error.status || 500).json(error)
})

export default app
