const Discord = require('discord.js');
const clent = new Discord.Client()
module.exports = {
    name: 'avatar',
    description: 'Get an avatar',
    execute(message, args) {
        const target = message.mentions.users.first() || message.author;
       // let url = target.avatarURL;
       // let encode = encodeURL(url);


        const avatarembed = new Discord.RichEmbed()     
        .setTitle('Username')
        .setDescription(target.tag)
        .setThumbnail(target.avatarURL)
        .addField('AvatarURL', `[Link Here](${target.avatarURL})`)
        .setColor('#FF9900')
        

    message.channel.send({ embed: avatarembed });
   
    },
};
