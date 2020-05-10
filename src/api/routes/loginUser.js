'use strict'
module.exports = ({
  router,
  schemas,
  validateSchema,
  authController,
  config
}) => {
  const { endpoints } = config
  const { loginSchema } = schemas

  router.post(
    `${endpoints.login.uri}`,
    validateSchema(loginSchema).validate,
    authController.login
  )
}
