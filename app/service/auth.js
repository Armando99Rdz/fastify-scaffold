'use strict'

/**
 * Authentication handlers/controllers
 */
const User = require('../models/User')

module.exports = {

  /**
   * Authenticate users
   * @param {fastify} app the fastify instance 
   */
  login: (app) => {
    return async function (request, reply) {
      try {
        console.log(request)
        return await User(app.knex).verified('email', 'x')
  
      } catch (error) {
        console.log(error.message)
        reply.status(500).send({
          msg: 'unknown.error',
        })
      }
    }
  },

  /**
   * Get request user authenticated
   * @param {fastify} app the fastify instance
   */
  me: (app) => {
    return async function (request, reply) {
      try {
        return reply.send({
          body: request.body
        })

      } catch (error) {

        if (error.code === '')
        return reply.status(500).send({
          msg: 'unknown.error'
        })
      }
    }
  }

}