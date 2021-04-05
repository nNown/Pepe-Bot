const flashCards = require('../db/models/flash_card')

exports.run = async (client, message, args) => {
    const flashCardName = args.shift();
    const flashCardTranslation = args.shift();
    const wordDescription = args.join(' ');

    const affectedRows = await flashCards.update({ translation: flashCardTranslation, description: wordDescription }, { where: { name: flashCardName } });
    if(affectedRows > 0) {
        return message.reply(`Flash card ${flashCardName} was edited.`);
    }
    return message.reply(`Could not find a tag with name ${tagName}`);
}

exports.help = {
    name: 'editword'
};