import jwt from 'jsonwebtoken'
import { SECRET } from '../constants'

export const jwtCheck = async ctx => {
  const token = ctx.headers['x-token']

  if (!token) {
    ctx.status = 403
    ctx.body = {
      success: false,
      error: 'No token provided.'
    }
    return
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      ctx.status = 403
      ctx.body = {
        success: false,
        error: 'Failed to authenticate token.'
      }
      return
    }
    ctx.body.userId = decoded.id
  })
}
