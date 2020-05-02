'use strict'

module.exports = () => {
    const User = require('../models/user')
        
    const bcrypt = require('bcrypt')
    const numberOfRounds = 10
    return {
        createUser: async () => {
            const user = await User.create(user)
            user.password = undefined

            return user
        },       
    }
}


