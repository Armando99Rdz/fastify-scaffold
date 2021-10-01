'use strict'

const fp = require('fastify-plugin')
const db = require('../config/database')
const log = require('../config/log')

/**
 * This plugins boot the database connection
 *
 * @see https://github.com/lyquocnam/fastify-sequelize
 */
module.exports = fp(async function (fastify, opts) {
  // fastify.register(require('fastify-sequelize'), db.sequelizeConfig(fastify))
  //   .ready(err => {
  //     if (err) return fastify.log.error(err.message)
  //   })
})
