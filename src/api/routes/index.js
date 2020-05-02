'use strict'

module.exports = ({
  express,
  config,
  controller,
  validateSchema,
  schemas

}) => {
  const router = express.Router()
  const { authController } = controller
  const { createSchema } = schemas


  require('./healthCheck')({ router, config })
  require('./createUser')({ router, config, authController, validateSchema, createSchema })
  
  return router
}
