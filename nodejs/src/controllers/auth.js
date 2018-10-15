import { createController } from 'awilix-koa'

const authController = authService => ({
  login: async ctx => {
    const {
      request: {
        body: { email, password }
      }
    } = ctx

    const token = await authService.login(email, password)

    if (!token) {
      ctx.throw(403, 'Invalid credentials')
    }

    ctx.body = token
  },

  signup: async ctx => {
    const {
      request: {
        body: { email, password }
      }
    } = ctx

    const user = await authService.getUserByEmail(email)

    if (user) {
      ctx.throw(403, 'User already exists')
    }

    ctx.body = await authService.signup(email, password)
  }
})

export default createController(authController)
  .prefix('/api')
  .post('/login', 'login')
  .post('/signup', 'signup')
