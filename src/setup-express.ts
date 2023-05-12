import http from 'http'

import express from 'express'
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4';

import router from './api/routes'
import { errorController, indexRedirectController } from './api/controllers'
import { swaggerDocs } from './api/utils/swagger'
import { graphqlSetup } from './setup-graphql'
import { HTTP_SERVER } from './types'

// Setup express and appolo server
let httpServer: HTTP_SERVER

(async function () {
    const app = express()
    httpServer = http.createServer(app)

    // Start GraphQL Apollo server as an express middleqware 
    const apolloServer = await graphqlSetup(httpServer)


    // Middlewares
    app.use(cors()) // Enable All CORS Requests
    app.use(express.json()) // JSON Parser
    
    // Routes
    app.all('/', indexRedirectController)
    swaggerDocs(app) // Swagger at /docs 
    app.use('/graph',expressMiddleware(apolloServer)) // Apollo server at /graph
    app.use('/api', router) // API Endpoint

    // Error handllers
    app.use(errorController.get404)
    app.use(errorController.get500)

})()


export { httpServer }