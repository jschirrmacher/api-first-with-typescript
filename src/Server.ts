import express from 'express'
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

export default app
