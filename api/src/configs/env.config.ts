import dotenv from 'dotenv'

dotenv.config()

const _process = { env: process.env }
process.env = {}

class Env {
  NODE_ENV = 'development'
  PORT = _process.env.PORT ?? 5000

  // db
  DB_DATABASE = _process.env.DB_DATABASE
  DB_PASSWORD = _process.env.DB_PASSWORD
  DB_USERNAME = _process.env.DB_USERNAME
  DB_HOST = _process.env.DB_HOST
  DB_PORT = Number(_process.env.DB_PORT) ?? 3306

  // jwt
  JWT_SECRET = _process.env.JWT_SECRET
  JWT_RT_SECRET = _process.env.JWT_RT_SECRET

  // mailer
  EMAIL = _process.env.EMAIL
  MAIL_PASSWORD = _process.env.MAIL_PASSWORD
}

export const envConfig = new Env()
