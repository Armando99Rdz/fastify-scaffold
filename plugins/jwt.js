'use strict'

const fp = require('fastify-plugin')
const path = require('path')

/**
 * This plugins expose the API public assets
 *
 * @see https://github.com/fastify/fastify-jwt
 */
module.exports = fp(async function (fastify, opts) {
  const appSecret = fastify.config.APP_KEY
  fastify.register(require('fastify-jwt'), {
    secret: appSecret
  })
})
