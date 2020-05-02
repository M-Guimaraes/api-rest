'use strict'

module.exports = ({ router, config }) => {
  const { endpoints } = config

  router.get(`${endpoints.healthCheck.uri}`, (req, res) => {
    res.json({ statusCode: 200, message: 'OK!' })
  })
  return router
}
