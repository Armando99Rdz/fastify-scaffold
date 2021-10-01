'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins boot fastify-multipart package
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-multipart'), {
    addToBody: true,
    limits: {
      fieldNameSize: 100,
      fieldSize: 1014 * 1024 * 5,
      fields: 10,
      fileSize: 1024 * 1014 * 5,
      files: 1,
      headerPairs: 2000
    }
  })
})
