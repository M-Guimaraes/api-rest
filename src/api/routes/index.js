'use strict'

module.exports = ({
  express,
  config,
  controller,
  validateSchema,
  schemas,
  joi
}) => {
  const router = express.Router()
  const { authController } = controller

  require('./healthCheck')({ router, config })
  require('./createUser')({
    router,
    config,
    authController,
    validateSchema,
    schemas,
    joi
  })
  require('./getAllUsers')({ router, config, authController })
  require('./deleteUser')({
    router,
    config,
    authController,
    validateSchema,
    schemas,
    joi
  })
  require('./updateUser')({
    router,
    config,
    authController,
    validateSchema,
    schemas,
    joi
  })
  require('./loginUser')({
    config,
    authController,
    schemas,
    router,
    validateSchema
  })

  return router
}
