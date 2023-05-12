// dotnev config to use environment variables
import * as dotenv from 'dotenv'
dotenv.config()
import { env } from './configs'
import { httpServer } from './setup-express'

const { PORT } = env
// Starting the server
httpServer.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}`))