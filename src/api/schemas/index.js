'use strict'

module.exports = ({ joi }) => {
  const createSchema = require('./createSchema')({ joi })
  const deleteSchema = require('./deleteSchema')({ joi })
  const updateSchema = require('./updateSchema')({ joi })
  const loginSchema = require('./loginSchema')({ joi })

  return { createSchema, deleteSchema, updateSchema, loginSchema }
}
