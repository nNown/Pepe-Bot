const TagModel = require('../db/models/tag')

exports.run = async (client, message, args) => {
    const tagName = args.shift();
    const tagDescription = args.join(' ');

    const affectedRows = await TagModel.update({ description: tagDescription }, { where: { name: tagName } });
    if(affectedRows > 0) {
        return message.reply(`Tag ${tagName} was edited.`);
    }
    return message.reply(`Could not find a tag with name ${tagName}`);
}

exports.help = {
    name: 'edittag'
};