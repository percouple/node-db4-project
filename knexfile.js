// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {filename: './data/cookbook.db3'},
    seeds: {directory: './data/seeds'},
    migrations: {
      directory: './data/migrations'
    },
    pool: {
      afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)
    }
  },

};
