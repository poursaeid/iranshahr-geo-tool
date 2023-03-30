import express from 'express'
import cors from 'cors'

import router from './api/routes'
import { errorController } from './api/controllers'
// Setup express app
const app = express()
// Middleware to Enable All CORS Requests
app.use(cors())
// Routes
app.use('/api', router)
// Error handllers
app.use(errorController.get404)
app.use(errorController.get500)
export { app }