import swaggerUi from 'swagger-ui-express'
import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'
import { Application, Request, Response } from 'express'

export default function ApiUI(app: Application) {
  const swaggerDocument = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '..', 'OAS3.yaml'), 'utf8'));
  const apiHTML = swaggerUi.generateHTML(swaggerDocument)

  app.use('/api-ui', swaggerUi.serveFiles(swaggerDocument))
  app.get('/api-ui', (req: Request, res: Response) => {
    res.send(apiHTML);
  })
}
