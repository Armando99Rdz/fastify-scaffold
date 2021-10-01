'use strict'

const fp = require('fastify-plugin')
const log = require('../config/log')

/**
 * This plugins boot fastify-nodemailer package
 * to send emails from the application.
 */

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-nodemailer'), {
    host: fastify.env.MAIL_HOST,
    port: fastify.env.MAIL_PORT,
    // secure: true, // use TLS
    auth: {
        user: fastify.env.MAIL_USER,
        pass: fastify.env.MAIL_PASS,
    },
    debug: false,
    logger: false,
  })
    .ready(err => {
      if (err) return fastify.log.error(err.message)
    })
})
