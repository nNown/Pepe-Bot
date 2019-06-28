const { prefix } = require('../config/config.json');
const { RichEmbed } = require('discord.js');

module.exports = (client, message) => {
    const messages = ['Lmao', 'Bruh...', 'WTF?', 'C\'mon man'];
    const random = Math.floor(Math.random() * 200);
    if(random < 100) message.channel.send(messages[Math.floor(Math.random() * messages.length)]);

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, message, args);
}