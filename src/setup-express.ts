import express from 'express'
import cors from 'cors'

import router from './api/routes'
// Setup express app
const app = express()
// Middleware to Enable All CORS Requests
app.use(cors())

app.use('/api', router)
export { app }