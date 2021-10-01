'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins boot fastify-cors to allow/deny
 * clients request according to the ip address.
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-cors'), { 
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
    // put your options here
  })
})
