const flashCards = require('../db/models/flash_card')

exports.run = async (client, message, args) => {
    const flashCardsList = await flashCards.findAll({ attributes: ['word'] });
    const flashCardsString = flashCardsList.map(t => t.word).join(', ') || 'No words set.';
    return message.channel.send(`List of words: ${flashCardsString}`);
}

exports.help = {
    name: 'showwords'
};