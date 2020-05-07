'use strict'
module.exports = ({ config, authController, router }) => {
  const { endpoints } = config
  router.get(`${endpoints.users.uri}`, authController.getAll)

  return router
}
