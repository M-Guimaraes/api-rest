'use strict'

module.exports = {
  unauthorized: msg => {
    const error = new Error()
    error.statusCode = 401
    error.message = msg
    return error
  },
  notFound: msg => {
    const error = new Error()
    error.statusCode = 404
    error.message = msg
    return error
  }
}
