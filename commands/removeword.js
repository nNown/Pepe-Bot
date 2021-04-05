const flashCards = require('../db/models/flash_card')

exports.run = async (client, message, args) => {
    const flashCardName = args;
    const rowCount = await TagModel.destroy({ where: { name: flashCardName } });
    if(!rowCount) return message.reply('That word did not exist.');

    return message.reply('Flash card deleted.');
}

exports.help = {
    name: 'removeword'
};