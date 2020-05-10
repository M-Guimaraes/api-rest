'use strict'
require('dotenv/config')

const baseUrl = {
  uri: '/api'
}
const { SERVER_PORT, SERVER_NAME, SERVER_HOST } = process.env
module.exports = {
  server: {
    serverPort: SERVER_PORT,
    serverHost: SERVER_HOST,
    serverName: SERVER_NAME
  },
  secrets: {
    secret: 'c4ca4238a0b923820dcc509a6f75849b'
  },
  endpoints: {
    baseUrl: baseUrl.uri,

    healthCheck: {
      uri: `${baseUrl.uri}/health-check`
    },
    create: {
      uri: `${baseUrl.uri}/create`
    },
    users: {
      uri: `${baseUrl.uri}/users`
    },
    delete: {
      uri: `${baseUrl.uri}/delete`
    },
    update: {
      uri: `${baseUrl.uri}/update`
    },
    login: {
      uri: `${baseUrl.uri}/login`
    }
  }
}
