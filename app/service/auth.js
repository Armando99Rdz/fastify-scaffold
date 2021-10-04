'use strict'

/**
 * Authentication handlers/controllers
 */
const User = require('../models/User')
const redis = require('../../config/redis')

module.exports = {

  /**
   * Authenticate users
   * @param {fastify} app the fastify instance 
   */
  login: (app) => {
    return async function (request, reply) {
      try {
        const token = await app.jwt.sign({ userId: 219 })
        await app.redis.set(`${redis.authTokenPrefix}${219}`, token)

        return reply.send({
          msg: 'logged.in',
          authToken: token,
        })
  
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
        const redisToken = await app.redis.get(`${redis.authTokenPrefix}${219}`)

        return reply.send({
          jwt: request.user,
          redisToken
        })

      } catch (error) {

        return reply.status(500).send({
          msg: 'unknown.error'
        })
      }
    }
  }

}