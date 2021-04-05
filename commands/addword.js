const flashCards = require('../db/models/flash_card')

exports.run = async (client, message, args) => {
    const flashCardName = args.shift();
    const flashCardTranslation = args.shift();
    const wordDescription = args.join(' ');

    try {
        const flashCard = await flashCards.create({
            word: flashCardName,
            translation: flashCardTranslation,
            description: wordDescription,
            username: message.author.username,
        })
        
        return message.reply(`Flash card ${flashCard.word} added.`);
    } catch(err) {
        if(err.name === 'SequelizeUniqueConstraintError') {
            return message.reply('That word already exists.');
        }
        return message.reply('Something went wrong with adding a flash card.');
    }
}

exports.help = {
    name: 'addword'
};