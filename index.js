const discord= require("discord.js");
const { Client, Intents } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", ()=>{
    console.log('Hello '+client.user.tag);
});

client.on("message", msg=>{
    console.log(msg.content);
    msg.reply("i see");
});

client.login(process.env.TOKEN);

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});