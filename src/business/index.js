'use strict'

module.exports = ({ User, config, bcrypt, errorUtil, jwt }) => {
  const userBusiness = require('./userBusiness')({
    User,
    config,
    bcrypt,
    jwt,
    errorUtil
  })
  return {
    userBusiness
  }
}
