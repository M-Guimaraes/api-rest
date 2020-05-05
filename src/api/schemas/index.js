'use strict'

module.exports = ({ joi }) => {
    const createSchema = require('./createSchema')({ joi })
    const deleteSchema = require('./deleteSchema')({ joi })

    return { createSchema, deleteSchema }
}