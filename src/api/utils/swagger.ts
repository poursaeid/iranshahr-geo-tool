import { Express } from 'express'
import swaggerJSDocs from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { version } from '../../../package.json'

const title = 'Iranshahr-geo REST API Docs'

const options: swaggerJSDocs.Options = {
    definition: {
        info: { title, version },
    },
    apis: ['./src/api/routes/index.ts']
}

const swaggerSpec = swaggerJSDocs(options)

export const swaggerDocs = (app: Express) => {
    // Swagger page
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

    // Docs in JSON format 
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}