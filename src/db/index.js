import { createConnection } from 'typeorm'
import { logger } from '../utils/logger'
import User from '../entities/user.entity'

export const createDatabaseConnection = async () => {
  const config = {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }

  logger.info('Connecting to database ...')
  logger.info('Database connection configuration: ', config)

  return createConnection({
    type: 'postgres',
    entities: [User],
    synchronize: true,
    ...config
  })
}
