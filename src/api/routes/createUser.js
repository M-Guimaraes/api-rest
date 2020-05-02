'use strict'
module.exports = ({
    router,
    config,
    authController,
    validateSchema, 
    createSchema
}) => {
    const { endpoints } = config

    router.post(
    `${endpoints.create.uri}`, 
    validateSchema(createSchema).validate, 
    authController.createUser
    )

    return router
}