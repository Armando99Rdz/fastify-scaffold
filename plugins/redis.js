'use strict'

const fp = require('fastify-plugin')
require('dotenv').config()

/**
 * This plugins expose the API public assets
 *
 */
module.exports = fp(async function (fastify, opts) {
  const HOST = fastify.config.REDIS_HOST
  fastify.register(require('fastify-redis'), { host: HOST })
})
