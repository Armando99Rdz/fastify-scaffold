'use strict'

/**
 * Knex.js configuration file. This file uses the database
 * configuration of the application from 'config' directory.
 */

const db = require('./config/database')
require('dotenv').config()

module.exports = {

  development: db.knexConfig(process.env),

  staging: db.knexConfig(process.env),

  production: db.knexConfig(process.env)

};
