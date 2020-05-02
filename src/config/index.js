'use strict'

require('dotenv/config')

const baseUrl = {
    uri: '/api'
}

const {
    SERVER_PORT,
    SERVER_NAME,
    SERVER_HOST,
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_ENGINE,
    DB_NAME,
} = process.env
module.exports = {
    server: {
        serverPort:  SERVER_PORT,
        serverHost:  SERVER_HOST,
        serverName:  SERVER_NAME
    },
    database: {
        username: DB_USER,
        userpassword: DB_PASSWD,
        name: DB_NAME,
        host: DB_HOST,
        dialect: DB_ENGINE
    },
    endpoints: {
        baseUrl: baseUrl.uri,
    
        healthCheck: {
          uri: `${baseUrl.uri}/health-check`
        },
        create: {
            uri: `${baseUrl.uri}/create`
        }
      }
    }
    