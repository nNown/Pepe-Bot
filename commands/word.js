const flashCards = require('../db/models/flash_card')

exports.run = async (client, message, args) => {
    const flashCardName = args;

    const flashCard = await flashCards.findOne({ where: { word: flashCardName } });
    if(flashCard) {
        // flashCard.increment('usage_count');
        return message.channel.send(`Translation: ${flashCard.get('translation')}\nDescription: ${flashCard.get('translation')}`);
    }
    return message.reply(`Could not find word: ${flashCardName}`);
}

exports.help = {
    name: 'word'
};