const ytdlDiscord = require('ytdl-core-discord')
const { Client, Intents, MessageEmbed, Message } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]
});

export async function Play(connection, url) {
  connection.play(await ytdlDiscord(url), { type: 'opus' });
}