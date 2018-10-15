import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import { SECRET, ACCESS_TOKEN_EXPIRES } from '../constants'
import User from '../entities/user.entity'

export default class AuthService {
  constructor(dbConnection) {
    this.dbConnection = dbConnection
  }

  async login(email, password) {
    const user = await this.getUserByEmail(email)

    if (!user) {
      return null
    }

    if (!this.comparePassword(password, user)) {
      return null
    }

    return this.issueToken(user)
  }

  async signup(email, password) {
    const user = User.create({ email, password })
    await this.dbConnection.manager.getRepository(User).insert(user)
    return this.issueToken(user)
  }

  async getUserByEmail(email) {
    return this.dbConnection.manager.getRepository(User).findOne({ email })
  }

  comparePassword(plainPass, user) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(
        plainPass,
        user.password,
        (err, isPasswordMatch) =>
          err == null ? resolve(isPasswordMatch) : reject(err)
      )
    })
  }

  issueToken(user) {
    return jwt.sign({ id: user.id }, SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES
    })
  }
}
