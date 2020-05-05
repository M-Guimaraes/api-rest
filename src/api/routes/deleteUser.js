'use strict'
module.exports = ({
    router,
    config,
    authController,
    validateSchema, 
    schemas
}) => {
    const { endpoints } = config
    const { deleteSchema } = schemas

    router.delete(
    `${endpoints.delete.uri}/:userId`, 
    validateSchema(deleteSchema).validate, 
    authController.deleteUser
    )

    return router
}