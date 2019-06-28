exports.run = (client, message, args) => {
    const random = Math.floor(Math.random() * 10);
    if(random <= 5) {
        message.channel.send(`Gross, Why anyone ever wanted to kiss him?`)
    } else {
        message.channel.send(`${message.author} kissed ${args}, WTF?`)
    }
}

exports.help = {
    name: 'ping'
};