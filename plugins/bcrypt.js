'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins boots bcrypt package.
 * 
 * You can access to this plugin as fastify.bcrypt.
 * Ex: fastify.bcrypt.compare(), fastify.bcrypt.hash(), etc.
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-bcrypt'), {
    saltWorkFactor: 12
  })
})
