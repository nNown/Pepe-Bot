const Sequelize = require('sequelize');
const db = require("../db");

module.exports = db.define('tags', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
});