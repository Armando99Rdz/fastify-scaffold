'use strict'

/**
 * The authentication routes
 */
const authService = require('../../app/service/auth')
const authSchema = require('../../app/schemas/auth')

module.exports = async function (fastify, opts) {

  // sign in
  fastify.post(
    '/login',
    { schema: authSchema.login },
    authService.login(fastify)
  )

  // get user logged in
  fastify.get(
    '/me',
    { schema: authSchema.me, preValidation: [fastify.auth] },
    authService.me(fastify)
  )
}
