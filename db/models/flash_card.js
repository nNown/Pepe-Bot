const Sequelize = require('sequelize');
const db = require("../db");

module.exports = db.define('flash_card', {
    word: {
        type: Sequelize.STRING,
        unique: true
    },
    translation: Sequelize.STRING,
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    correct_answers: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
});