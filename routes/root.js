'use strict'

const mail = require('../App/Utils/mail')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
    const html = await mail.html.welcome(fastify, {
      name: 'Armandoo',
      actionUrl: 'https://armandordz.xyz',
    })

    const emailId = mail.send(fastify, {
      from: '<noreply@fastify.com',
      to: 'armando@armando.com',
      subject: 'Welcome',
      html,
    })

    return { root: true, emailId }
  })
}
