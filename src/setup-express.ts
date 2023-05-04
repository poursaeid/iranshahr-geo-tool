import express from 'express'
import cors from 'cors'

import router from './api/routes'
import { errorController, indexRedirectController } from './api/controllers'
import { swaggerDocs } from './api/utils/swagger'
// Setup express app
const app = express()
// Middleware to Enable All CORS Requests
app.use(cors())
// Routes
app.all('/', indexRedirectController)
// Swagger at /docs 
swaggerDocs(app)
// API Endpoint
app.use('/api', router)
// Error handllers
app.use(errorController.get404)
app.use(errorController.get500)
export { app }