const TagModel = require('../db/models/tag')

exports.run = async (client, message, args) => {
    const tagName = args;

    const tag = await TagModel.findOne({ where: { name: tagName } });
    if(tag) {
        tag.increment('usage_count');
        return message.channel.send(tag.get('description'));
    }
    return message.reply(`Could not find tag: ${tagName}`);
}

exports.help = {
    name: 'tag'
};