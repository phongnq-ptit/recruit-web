import express, { Express } from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import { envConfig } from '@/configs/env.config'
import { Connection } from '@/configs/database.config'
import exceptionFilter from '@/filters/exception.filter'
import routes from '@/routes'
import logger from '@/configs/logger.config'
import 'reflect-metadata'
import '@/utils/response'
import cookieParser from 'cookie-parser'

class Server {
  private app: Express
  private port: string | number

  constructor() {
    this.app = express()
    this.port = envConfig.PORT || 5000
    this.middlewares()
    this.listen()
  }

  middlewares() {
    this.app.use(cors({ origin: '*' }))
    this.app.use(helmet())
    this.app.use(bodyParser.json({ limit: '50mb' }))
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
    this.app.use(cookieParser())
    this.app.use('/api', routes)
    this.app.use(exceptionFilter)
  }

  listen() {
    Connection.initialize()
      .then(() => {
        logger.info(`⚡️[database]: Database connected successfully`)
        this.app.listen(this.port, () => {
          logger.info(`⚡️[server]: Server is running at http://localhost:${this.port}`)
        })
      })
      .catch((e) => {
        logger.error(`⚡️[database]: Error connecting database`, e)
      })
  }
}

export default Server
