/** 3rd party modules */
// dotnev config to use environment variables
import * as dotenv from 'dotenv'
dotenv.config()
/** Local modules */
import { app } from './setup-express'
import { env } from './configs'

const { PORT } = env
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))