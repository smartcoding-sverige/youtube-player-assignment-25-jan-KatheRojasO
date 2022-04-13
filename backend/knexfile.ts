// Update with your config settings.

require('dotenv').config();

const { knexSnakeCaseMappers } = require ('objection');
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'youtube-assignment',
      user:'postgres',
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations'
    },
    
    seeds: {
      directory: './src/seeds'
    },
    ...knexSnakeCaseMappers
  },
};
