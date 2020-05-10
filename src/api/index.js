'use strict'

module.exports = ({
  express,
  config,
  bodyParser,
  controller,
  joi,
  errorUtil,
  jwt
}) => {
  const { validateSchema, verifyToken } = require('./middlewares')({
    config,
    jwt,
    errorUtil
  })
  const app = express()
  const schemas = require('./schemas')({ joi })
  const routes = require('./routes')({
    express,
    schemas,
    config,
    validateSchema,
    controller,
    joi,
    errorUtil
  })
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(verifyToken)
  app.use(routes)

  return app
}
