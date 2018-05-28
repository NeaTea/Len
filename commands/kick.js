const Discord = require('discord.js');



module.exports = {
name: 'kick',
description: 'Kick a user of your server',
guildonly: true,

execute(message, args) {
    if (!message.member.hasPermission(`KICK_MEMBERS`)) {
        message.reply(`Insufficient perms, KICK_MEMBERS perm is required.`); 
        console.log(`${message.author.username} attempted to kick without sufficient permissions!`);
    return;

    }

    
    let target = message.mentions.members.first()

    
    if (!target) {
        let errorembed = new Discord.RichEmbed()
        .setTitle(`Error.`) 
        .setDescription(`**${message.author.tag}**, you need to specify a user!`)
        .setColor('#FF9900')


        message.channel.send({embed: errorembed});
        return;
       
    }
    
    target.kick();
    const kickembed = new Discord.RichEmbed()
    .setTitle(`Kicked user ${target.user.tag}`)
    .setColor('#FF9900')
    message.channel.send({embed: kickembed});
},   

};