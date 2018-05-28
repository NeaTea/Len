const Discord = require('discord.js');
module.exports = {
    name: 'server',
    description: 'Shows information on your server',
    execute(message, args) {

       /* if (!guild.available) {
            let errorembed = new Discord.RichEmbed()
            .setTitle(`<:xmark:439247621018615813><@${message.author.id}> an error occured.`)
        }
        */
        const serverembed = new Discord.RichEmbed()
        .setTitle(`Server: ${message.guild.name}`)
        .setThumbnail(message.guild.iconURL)
        .setDescription(`ID:${message.guild.id}`)
        .addField(`Owner`, `${message.guild.owner}`,true)
        .addField(`Members`, `${message.guild.memberCount}`, true )
        .addField(`Created`, message.guild.createdTimestamp, true)
        .addField(`Channels`, `${message.guild.channels}`)
        .setColor(`#FF9900`)
        message.channel.send({embed: serverembed});
    }
}
