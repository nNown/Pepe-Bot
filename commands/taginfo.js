const TagModel = require('../db/models/tag')

exports.run = async (client, message, args) => {
    const tagName = args;

    const tag = await TagModel.findOne({ where: { name: tagName } });
    if(tag) {
        return message.channel.send(`${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
    }
    return message.reply(`Could not find tag: ${tagName}`);
}

exports.help = {
    name: 'taginfo'
};