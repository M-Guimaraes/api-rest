'use strict'
/* eslint-disable prettier/prettier */
'use strict'
module.exports = ({ joi }) => {
  const updateSchema = joi.object({
    params: {
      type: 'object',
      required: ['userId'],
      properties: {
        userId: { type: 'string' }
      }
    },
    userName: joi.string().alphanum().min(6).max(30),
    firstName: joi.string().alphanum(),
    lastName: joi.string().alphanum(),
    email: joi.string().email(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })
  return updateSchema
}
