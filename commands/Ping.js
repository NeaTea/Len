const Discord = require('discord.js');
const fs = require(`fs`)
const pingreply = require(`../config.json`)

module.exports = {
    name: 'ping',
    description: 'Ping!',
    cooldown: 2,
    execute(message, args) {
        const pingembed = new Discord.RichEmbed()
        .setTitle('Pong! ')
       // .addField('Pong! ',  message.createdTimestamp + " ms ")
        .setDescription(`It took ${message.client.ping}ms to ping Ethiopia's food source. :thinking:`)
        .setColor('#FF9900')
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL )
        
   message.channel.send({ embed: pingembed });
   
    },
};
 