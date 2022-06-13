const ytdl = require('ytdl-core')
const { Client, Intents, MessageEmbed, Message } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]
});

export function LinkInfo(link = ''){
  if (link.length === 0) return;
  return ytdl.videoInfo(link)
}