'use strict'

/**
 * 
 */
const s = require('fluent-json-schema')

module.exports = {
  login: {
    body: s.object()
     .prop('email', s.string().required()),
  },

  me: {
    headers: s.object()
      .prop('Authorization', s.string().required())
  }
}