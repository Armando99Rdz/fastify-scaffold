'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    console.log(fastify.config)
    return 'this is an example'
  })
}
