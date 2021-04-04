const TagModel = require('../db/models/tag')

exports.run = async (client, message, args) => {
    const tagName = args;
    const rowCount = await TagModel.destroy({ where: { name: tagName } });
    if(!rowCount) return message.reply('That tag did not exist.');

    return message.reply('Tag deleted.');
}

exports.help = {
    name: 'removetag'
};