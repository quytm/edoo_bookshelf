/**
 * Created by tmq on 10/07/2016.
 */

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'edoo_1',
        charset: 'utf8'
    }
});

module.exports.bookshelf     = require('bookshelf')(knex);