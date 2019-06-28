const axios = require('axios');

exports.run = (client, message, args) => {
    message.channel.send(`Better say pong right no...`)
}

exports.help = {
    name: 'ping'
};