const TagModel = require('../db/models/tag')

exports.run = async (client, message, args) => {
    const tagName = args.shift();
    const tagDescription = args.join(' ');

    try {
        const tag = await TagModel.create({
            name: tagName,
            description: tagDescription,
            username: message.author.username
        });
        return message.reply(`Tag ${tag.name} added.`);
    } catch(err) {
        if(err.name === 'SequelizeUniqueConstraintError') {
            return message.reply('That tag already exists.');
        }
        return message.reply('Something went wrong with adding a tag.');
    }
}

exports.help = {
    name: 'addtag'
};