'use strict'

module.exports = ({ 
    router, 
    config, 
    authController, 
    validateSchema, 
    schemas 
}) => {

    const { endpoints } = config
    const { updateSchema } = schemas

    router.put(
        `${endpoints.update.uri}/:userId`,
        validateSchema(updateSchema).validate,
        authController.updateUser
    )
        return router
}