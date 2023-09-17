import { DataSource } from 'typeorm'
import { envConfig } from './env.config'

export const Connection = new DataSource({
  type: 'mysql',
  host: envConfig.DB_HOST,
  port: envConfig.DB_PORT,
  username: envConfig.DB_USERNAME,
  password: envConfig.DB_PASSWORD,
  database: envConfig.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ['src/**/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: []
})
