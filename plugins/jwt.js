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

  // call it as fastify.auth from the route definition
  // to protect your routes with jwt.
  fastify.decorate("auth", async function(request, reply) {
    try {
      await request.jwtVerify()
      fastify.log.info('jwt validated')
      
    } catch (error) {
      fastify.log.warn(JSON.stringify(error))
      return reply.status(401).send({
        msg: 'unauthenticated'
      })
    }
  })
})
