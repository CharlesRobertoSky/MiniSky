const ytdl = require('ytdl-core')



const { Client, Intents, MessageEmbed, Message } = require('discord.js');
const config = require('../config.json')
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]
});

export function Download(link = '', format = 'mp3') {
  if (link.length === 0){
    return;
  }
  return ytdl(link, format);
}