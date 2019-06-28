const axios = require('axios');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    axios.get('http://aws.random.cat/meow').then(res => {
        const catEmbed = new RichEmbed()
            .setColor(`eeffdd`)
            .setTitle('A cat, I don\'t even like it')
            .setImage(res.data.file)
            .setTimestamp()
            .setFooter(`ID: ${message.author.id}`);
        message.channel.send(catEmbed);
    });
}

exports.help = {
    name: 'cat'
};