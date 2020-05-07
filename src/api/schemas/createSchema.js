'use strict'

module.exports = ({ joi }) => {
  const createSchema = joi.object({
    userName: joi.string().alphanum().min(6).max(30).required(),
    firstName: joi.string().alphanum().required(),
    lastName: joi.string().alphanum().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
  })

  return createSchema
}
