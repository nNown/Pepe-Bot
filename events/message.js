const { prefix } = require('../config/config.json');
const { RichEmbed } = require('discord.js');

module.exports = (client, message) => {
    if (message.author.bot) return;
    
    if (message.author.id === "418527817878470658") message.channel.send("<:dankLove:823646737854889984>");
    else message.channel.send("<:dankBlush:823648948245495869>");

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, message, args);
}