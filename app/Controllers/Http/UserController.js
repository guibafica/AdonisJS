'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const address = request.input('address')
    // o input retorna apenas uma informação do body da requisição

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)
    await user.addresses().createMany(address, trx)

    await trx.commit()

    return user
  }
}

module.exports = UserController
