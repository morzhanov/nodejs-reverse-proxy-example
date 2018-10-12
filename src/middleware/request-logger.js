import { logger } from '../utils/logger'

export const requestLogger = async (ctx, next) => {
  logger.info(`<--  ${ctx.method}  ${ctx.path}`)
  await next()
  logger.info(`-->  ${ctx.status}  ${ctx.path}   message: ${ctx.message}`)
}
