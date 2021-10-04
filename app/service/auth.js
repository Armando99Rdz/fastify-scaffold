'use strict'

/**
 * Authentication handlers/controllers
 */

module.exports = {

  /**
   * Authenticate users
   * @param {fastify} app the fastify instance 
   */
  login: (app) => {
    return async function (request, reply) {
      try {
        
        return request.headers
  
      } catch (error) {
        
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
        return request.body
      } catch (error) {
        if (error.code === '')
        reply.status(500).send({
          msg: 'unknown.error'
        })
      }
    }
  }

}