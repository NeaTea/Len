

const fs = require(`fs`)
const Dicord = require(`discord.js`)
const config = require(`../config.json`);
const { prefix, token, owner } = require(`../config.json`);  
// const client = Discord.client();
module.exports = {  
    name: `Shutdown`,
    description: `Shutdown the bot`,
    guildonly: false,

    execute(message, args) {
        if(!message.author.id === owner) {
            message.reply(`This command is only for the bot owner`);
            console.log(`${message.author} tried shutting down the bot`);
            return;
        }
       
        message.channel.send(`Shutting down...`);
        console.log(`Shutting down...`);
        client.destroy
    }








}