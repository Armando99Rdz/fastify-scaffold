'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins boot the database connection
 *
 * @see https://github.com/lyquocnam/fastify-sequelize
 */
module.exports = fp(async function (fastify, opts) {
  const appSecret = fastify.config.APP_KEY
  fastify.register(require('fastify-jwt'), {
    secret: appSecret
  })
})
