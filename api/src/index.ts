import express, { Express } from 'express'
import 'reflect-metadata'
import cors from 'cors'
import helmet from 'helmet'
import '@/utils/response'
import * as bodyParser from 'body-parser'
import { envConfig } from './configs/env.config'
import logger from '@/configs/logger.config'

const app: Express = express()
const port = envConfig.PORT || 5000

app.use(cors({ origin: '*' }))
app.use(helmet())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`)
})
