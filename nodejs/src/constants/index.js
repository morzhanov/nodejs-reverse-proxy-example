import dotenv from 'dotenv'

dotenv.config()

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const API_URI = '/api'
export const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES || '24h'
export const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE_NAME,
  SECRET,
  PORT
} = process.env
