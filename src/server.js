'use strict'
const jwt = require('jsonwebtoken')
const errorUtil = require('./utils/error')
const config = require('./config')
const joi = require('@hapi/joi')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const express = require('express')
const bodyParser = require('body-parser')
const User = require('./models/user')()
const business = require('./business')({ config, errorUtil, User, jwt, bcrypt })
const controller = require('./controller')({ business, bcrypt })
const schemas = require('./api/schemas')({ joi })

const app = require('./api')({
  express,
  config,
  bodyParser,
  controller,
  joi,
  schemas,
  errorUtil
})
const { server } = config

app.listen(server.serverPort, () => {
  console.log('Server rodando')
})
