'use strict'
const mongoose =  require('mongoose')
const fs = require('fs')
const path = require('path')
const config = require('./config')
const joi = require('@hapi/joi')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const express = require('express')
const bodyParser = require('body-parser')
const business = require('./business')({ config })
const controller = require('./controller')({ business, bcrypt })
const schemas = require('./api/schemas')({ joi })

const app = require('./api')({
  express,
  config,
  bodyParser,
  controller,
  joi,
  schemas
})
const { server } = config

app.listen(server.serverPort, () => {
})
