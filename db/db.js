const Sequelize = require('sequelize');

module.exports = new Sequelize('database', 'sqlite', '123', {
    host: 'localhost',
    dialect: 'sqlite',
    operatorAliases: false,
    logging: false,
    storage: './database.sqlite'
});