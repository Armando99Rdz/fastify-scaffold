'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins boots bookshelf ORM.
 * 
 * This plugin uses the knex database connection which means
 * that knex plugin must be loaded first and then this plugin.
 */
module.exports = fp(async function (fastify, opts) {
  const connectionOpts = fastify.knex.connection().client.config
  fastify.register(require('fastify-bookshelfjs'), connectionOpts, console.error)
})
