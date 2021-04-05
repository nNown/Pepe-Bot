const flashCards = require('../db/models/tag')

exports.run = async (client, message, args) => {
    const flashCardName = args;

    const flashCard = await flashCards.findOne({ where: { word: flashCardName } });
    if(flashCard) {
        return message.channel.send(`${flashCardName} was created by ${flashCard.username} at ${flashCard.createdAt}.`);
    }
    return message.reply(`Could not find word: ${flashCardName}`);
}

exports.help = {
    name: 'wordinfo'
};