'use strict'

module.exports = ({ User, errorUtil }) => {
  const bcrypt = require('bcrypt')
  const numberOfRounds = 10
  return {
    createUser: async user => {
      const salt = await bcrypt.genSalt(numberOfRounds)
      user.password = bcrypt.hashSync(user.password, salt)
      const newuser = await User.create(user)
      newuser.password = undefined

      return newuser
    },
    getAll: async (req, res) => {
      const users = await User.find().populate(['users'])

      if (!users) return res.status(400).send({ error: 'User not found' })
      return users
    },
    deleteUser: async userId => {
      const user = await User.findOne({
        _id: userId
      })
      if (!user) return errorUtil.notFound('User not found')

      await user.delete()
      return { message: 'User excluded' }
    },
    updateUser: async (userId, payload) => {
      const user = await User.findOne({
        _id: userId
      })
      if (!user) return errorUtil.notFound('User not found')

      // eslint-disable-next-line no-unused-expressions
      Object.keys(payload).forEach(key => {
        user[key] = payload[key]
      })
      await user.save()
      return { message: 'User update' }
    }
  }
}
