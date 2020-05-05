'user strict'
module.exports = ({ joi }) => {
    const deleteSchema = joi.object({
        params: {
            type: 'object',
            required: ['userId'],
            properties: {
                userId: { type: 'string'}
            }
        }
    })

    return deleteSchema
}