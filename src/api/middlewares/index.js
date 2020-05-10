'use strict'
module.exports = ({ errorUtil, jwt, config }) => {
  const { validateSchema } = require('./validateSchema')
  const { verifyToken } = require('./authToken')({ errorUtil, jwt, config })

  return {
    validateSchema,
    verifyToken
  }
}
