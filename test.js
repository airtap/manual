'use strict'

const test = require('tape')
const integration = require('airtap/test/integration')
const Provider = require('.')

if (!process.env.CI) {
  integration(test, Provider)
}
