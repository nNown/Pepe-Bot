const TagModel = require('../db/models/tag')

exports.run = async (client, message, args) => {
    const tagList = await TagModel.findAll({ attributes: ['name'] });
    const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
    return message.channel.send(`List of tags: ${tagString}`);
}

exports.help = {
    name: 'showtags'
};