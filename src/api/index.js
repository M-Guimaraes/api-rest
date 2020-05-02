'use strict'

module.exports = ({ express, config, bodyParser, controller, joi }) => {
    const { validateSchema } = require('./middlewares')({ config })
    const app = express()
    const schemas =require('./schemas')({ joi })
    const routes = require('./routes')({
        express,
        schemas,
        config,
        validateSchema,
        controller
    })
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(routes)

    return app
}