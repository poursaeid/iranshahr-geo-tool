import express from 'express'
import cors from 'cors'

// Setup express app
const app = express()
// Middleware to Enable All CORS Requests
app.use(cors())

export { app }