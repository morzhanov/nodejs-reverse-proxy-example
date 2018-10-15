import { createConnection } from 'typeorm'
import { logger } from '../utils/logger'
import User from '../entities/user.entity'

export const createDatabaseConnection = async () => {
  const { DB_CONNECTION, DEV_DB_CONNECTION, NODE_ENV } = process.env
  const connectionUrl =
    NODE_ENV === 'development' ? DEV_DB_CONNECTION : DB_CONNECTION
  logger.info('Connecting to database ...')
  logger.info('Database connection url: ', connectionUrl)

  return createConnection({
    type: 'postgres',
    entities: [User],
    synchronize: NODE_ENV === 'development',
    url: connectionUrl
  })
}
