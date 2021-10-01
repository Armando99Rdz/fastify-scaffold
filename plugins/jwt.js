'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins expose the API public assets
 *
 * @see https://github.com/fastify/fastify-jwt
 */
module.exports = fp(async function (fastify, opts) {
  const appSecret = fastify.env.APP_KEY
  
  if (!appSecret) 
    throw new Error('Error APP_KEY not setted')
  
  fastify.register(require('fastify-jwt'), {
    secret: appSecret
  })
})
