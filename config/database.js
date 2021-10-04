'use strict'

/**
 * This files contains the general configuration of the
 * database and sequelize.
 */
const log = require('./log')

module.exports = {

  /**
   * Prepare knex.js config object
   * @param {environment} env environment variables object
   * @returns knex config object
   */
   knexConfig: (env) => {
    return {
      client: 'mysql',
      connection: {
        host: env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
        charset: 'utf8',
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: 'database/migrations',
      },
      seeds: {
        directory: 'database/seeds'
      }
    }
  },
  
  /**
   * Prepare sequelize config object
   * @param {fastify} app (the fastify app intance)
   * @returns sequelize config object
   */
  sequelizeConfig: (app) => {
    return {
      instance: 'sequelize', // the name of fastify plugin instance.
      autoConnect: true, // auto authentication and test connection on first run
      dialect: 'mysql',
      operatorsAliases: false,
      host: app.env.DB_HOST,
      port: app.env.DB_PORT,
      username: app.env.DB_USER,
      password: app.env.DB_PASS,
      database: app.env.DB_NAME,
      define: {
        charset: 'utf8',
        dialectOptions: {
          collate: 'utf8_general_ci'
        },
      },
      logging: msg => {
        return app.env.SEQUELIZE_LOG ? app.log.info(`${log.prefixApp} ${msg}`) : false
      },
    }
  },

}
