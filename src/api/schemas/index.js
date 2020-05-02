'use strict'

module.exports = ({ joi }) => {
    const createSchema = require('./createSchema')({ joi })

    return { createSchema }
}