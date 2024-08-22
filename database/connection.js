const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '1538minha',
      database : 'gaa'
    }
  });

  module.exports = knex