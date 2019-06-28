const axios = require('axios');

exports.run = (client, message, args) => {
    axios.get('https://api.adviceslip.com/advice').then(async res => {
        await message.channel.send(`Listen to me now 😡 \n ${res.data.slip.advice}`);
    });
}

exports.help = {
    name: 'advice'
};