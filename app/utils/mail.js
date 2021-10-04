'use strict'

/**
 * This util contains the function and properties
 * to send emails through nodemailer plugin.
 */

const path = require('path')
const viewsPath = path.resolve(__dirname, '..', '..', 'resources', 'emails')

function appendTemplateData (app, data) {
  return {
    appName: app.env.APP_NAME || 'Fastify Scaffold',
    year: (new Date()).getFullYear(),
    ...data
  }
}

module.exports = {

  /**
   * Email sender function
   * @param {fastify} app fastify app instance
   * @param {options} opt nodemailer options {from, to, cc, bcc, subject, html}
   * @returns message id or false if error
   */
  send: (app, opts) => {
    app.nodemailer.sendMail(opts, (err, info) => {
      if (err) {
        app.log.error(err.message)
        return false
      }
      return info.mssageId
    })
  },

  html: {

    /**
     * Get welcome email HTML ready to pass
     * as options to nodemailer.
     * @returns all the rendered html code
     */
    welcome: async (app, data) => {
      const fullData = appendTemplateData(app, data)
      const edge = require('edge.js').default
      edge.mount(viewsPath)
      const html = await edge.render('welcome', fullData)
      return html
    },
  }
}