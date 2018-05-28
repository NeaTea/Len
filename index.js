// Require file system
const fs = require('fs');
// Import the discord.js module
const Discord = require('discord.js');
// Require the config file
const config = require('./config.json');
const { prefix, token, owner } = require('./config.json');

// Creates an instance of a Discord client
const client = new Discord.Client();


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('Bot is ready');
  console.log(`Logged into Discord as ${client.user.tag}`);
});

 // Create an event listener for messages
 client.on('message', message => {

 if (!message.content.startsWith(prefix) || message.author.bot) return;
  
const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();



if (!client.commands.has(commandName)) return;

const command = client.commands.get(commandName);

/* if (command.guildOnly && message.channel.type !== 'text') {
    return message.reply(`I can't execute that command inside DMs!`);
}
*/
try {
    command.execute(message, args);
}
catch (error) {
    console.error(error)
    message.reply('Error trying to run the command...')
}



    
   

  

 });

// Log the bot in
client.login(token);

/* Vaporizing thots is the sovereign right of all Americans

(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

Get vaporized thot




从卂尺长 乙凵匚长乇尺乃乇尺厶 工丂 卂 乚工乙卂尺刀 乃口丅
*/