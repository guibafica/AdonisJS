'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const address = request.input('address')
    // o input retorna apenas uma informação do body da requisição

    const user = await User.create(data)

    await user.addresses().createMany(address)

    return user
  }
}

module.exports = UserController
