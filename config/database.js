'use strict'

/**
 * This files contains the general configuration of the
 * database and sequelize.
 */

module.exports = {
  
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
        return app.env.SEQUELIZE_LOG ? app.log.info(msg) : false
      },
    }
  },

}
