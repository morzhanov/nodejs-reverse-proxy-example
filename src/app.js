import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import { scopePerRequest, loadControllers } from 'awilix-koa'
import { logger } from './utils/logger'
import { requestLogger } from './middleware/request-logger'
import { notFoundHandler } from './middleware/not-found'
import { errorHandler } from './middleware/error-handler'

export const createApp = container => {
  logger.info('Creating app instance')

  const app = new Koa()

  app
    .use(errorHandler)
    .use(requestLogger)
    .use(compress())
    .use(cors())
    .use(bodyParser())
    .use(scopePerRequest(container))
    .use(loadControllers('./controllers/*.ts', { cwd: __dirname }))
    .use(notFoundHandler)

  logger.info('Koa application created!')

  return app
}
