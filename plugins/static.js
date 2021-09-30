'use strict'

const fp = require('fastify-plugin')
const path = require('path')

/**
 * This plugins expose the API public assets
 *
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-static'), {
    root: path.resolve(__dirname, '..', 'public'),
    prefix: '/public/', // optional: default '/'
  })
})
