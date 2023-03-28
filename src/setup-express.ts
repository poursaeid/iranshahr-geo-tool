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
// TODO 
// !FIX: GET 404 ONLY WORKS OUTSIDE OF THE '/api/*' PATH
app.use(errorController.get404)
app.use(errorController.get500)
export { app }