'use strict'

const fp = require('fastify-plugin')
const db = require('../config/database')
const log = require('../config/log')

/**
 * This plugins boots knex package.
 * 
 * This library allow to manage database version working 
 * with migrations, seeders also providing a query builder.
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-knexjs'), db.knexConfig)
    .ready(err => {
      if (err) return fastify.log.error(`${log.prefixApp} ${err.message}`)
      fastify.log.info(`${log.prefixApp} Knex connection done...`)
    })
})
