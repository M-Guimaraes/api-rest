'use strict'
module.exports = ({
  router,
  config,
  authController,
  validateSchema,
  schemas
}) => {
  const { endpoints } = config
  const { createSchema } = schemas

  router.post(
    `${endpoints.create.uri}`,
    validateSchema(createSchema).validate,
    authController.createUser
  )

  return router
}
