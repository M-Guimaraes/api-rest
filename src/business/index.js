'use strict'

module.exports = ({ config }) => {
  const userBusiness = require('./userBusiness')({
    config
  })
  return {
    userBusiness
  }
}
