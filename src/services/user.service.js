import User from '../entities/user.entity'

export default class UserService {
  constructor(dbConnection) {
    this.dbConnection = dbConnection
  }

  async getUsers() {
    return this.dbConnection.manager.getRepository(User).find()
  }

  async getUser(id) {
    return this.dbConnection.manager.getRepository(User).findOne(id)
  }

  async createUser(email, password) {
    const user = User.create({ email, password })
    await this.dbConnection.manager.getRepository(User).insert(user)
    return user
  }

  async updateUser(userId, userData) {
    await this.dbConnection.manager
      .getRepository(User)
      .update({ id: userId }, userData)

    return this.dbConnection.manager.getRepository(User).findOne(userData)
  }

  async deleteUser(id) {
    await this.dbConnection.manager.getRepository(User).delete(id)
  }
}
