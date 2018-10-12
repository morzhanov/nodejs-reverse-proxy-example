import http from 'http'
import { createDatabaseConnection } from './db'
import { createApp } from './app'
import { PORT, NODE_ENV } from './constants'
import { logger } from './utils/logger'
import { configureContainer } from './di/container'

createDatabaseConnection().then(connection => {
  logger.info('Connected to database!')

  const container = configureContainer(connection)
  const app = createApp(container)

  const server = http.createServer(app.callback())

  server.on('close', () => {
    logger.info('Server closing, bye!')
  })

  logger.info('Server created, ready to listen', { scope: 'startup' })

  app.listen(PORT, () => {
    logger.info(`Server listening on ${PORT} in ${NODE_ENV} mode`)
  })
})
