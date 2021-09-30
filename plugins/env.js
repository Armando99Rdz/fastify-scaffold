'use strict'

const fp = require('fastify-plugin')
const fastifyEnv = require('fastify-env')
require('dotenv').config()

/**
 * Validation schema for env
 */
const schema = {
  type: 'object',
  required: [
    'APP_PORT',
    'APP_HOST',
    'APP_URL',
    'APP_KEY',
    'DB_HOST',
    'DB_PORT',
    'DB_USER',
    'DB_NAME',
    'REDIS_HOST',
  ],
  properties: {
    APP_PORT: {
      type: 'string',
      default: 3000
    },
    APP_HOST: {
      type: 'string',
      default: '127.0.0.1'
    },
    APP_URL: {
      type: 'string'
    },
    APP_KEY: {
      type: 'string'
    },
    DB_HOST: {
      type: 'string',
      default: '127.0.0.1'
    },
    DB_PORT: {
      type: 'string'
    },
    DB_USER: {
      type: 'string'
    },
    REDIS_HOST: {
      type: 'string',
      default: '127.0.0.1'
    },
  }
}

const options = {
  confKey: 'config', // optional, default: 'config'
  schema: schema,
  data: process.env // optional, default: process.env
}


/**
 * This plugins expose env variables to all application
 *
 * @see https://github.com/fastify/fastify-env
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(fastifyEnv, options)
    .ready((err) => {
      if (err) fastify.log.error(err.message)

      fastify.log.info(fastify.config) // env json
    })
})
