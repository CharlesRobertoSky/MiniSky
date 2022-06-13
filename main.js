const { Client, Intents, MessageEmbed, Message, Guild } = require('discord.js');
const config = require('./config.json')
// const downloader = require('./commands/downloaderYT.js')
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Online');
});
client.on('interactionCreate', interaction => { 
	const role =  interaction.options.getRole('diamond');
	const member = interaction.options.getMember(client.guilds.cache.get('343464455109083141'));
	member.roles.add(role);
});
client.on('messageCreate', async (messageCreate, message) => {
	if (messageCreate.author.bot) return;
	if(messageCreate.channel.type ==="DM") return;

	const args = messageCreate.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLocaleLowerCase();
	
	if (command === 'ping'){
		const m = await messageCreate.channel.send('Ping?');
		m.edit('Pong')
	}
	// if (command == "k"){
		
  //   const exampleEmbed = new MessageEmbed()
	// .setColor('#000000')
	// .setTitle('Mini Sky')
	// .setURL('https://github.com/CharlesRobertoSky')
	// .setAuthor({ name: 'Skyzin Bot', iconURL: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/adff6316f2ecda252387634b5b732056627a8e4d48d4d3580ee1c9b9cb03e9a4_1.jpg', url: 'https://discord.js.org' })
	// .setDescription('Bot Pessoal')
	// .setThumbnail('https://img.ifunny.co/images/2cbe79afd7b8cb088e4f83d0b5bc4674a231998c5d6b79bd38242636b0ac71da_3.jpg')
	// .addFields(
	// 	{ name: 'Regular field title', value: 'Some value here' },
	// 	{ name: '\u200B', value: '\u200B' },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// )
	// .addField('Inline field title', 'Some value here', true)
	// .setImage('https://i.pinimg.com/474x/8d/70/22/8d70222799ba74da606811bc6ea3a30f.jpg')
	// .setTimestamp()
	// .setFooter({ text: 'Bot pessoal', iconURL: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/adff6316f2ecda252387634b5b732056627a8e4d48d4d3580ee1c9b9cb03e9a4_1.jpg' });

	// messageCreate.channel.send({ embeds: [exampleEmbed] });		
	// 	}
		
		
	if(command === 'k'){
		if(messageCreate.author.id == '343464455109083141'){
			console.log('Chamada de sky')
			try{
			messageCreate.member.roles.add('984859244803260517')
			console.log(`adicionado cargo ao ${messageCreate.author.username}`)
			}catch{
				console.log('Não foi possivel adicionar cargo')
			}
		};
		await messageCreate.channel.send('Comando inválido.')
		console.log(messageCreate.author)
	}

	if(command === 'break' && messageCreate.author.id == '343464455109083141'){
		console.log('Forçando quebra de código por comando em Discord')
		await messageCreate.channel.send('Encerrando processos do bot...')
		process.exit('/main.js')
	}

	// if(command === 'download'){
	// 	try{
	// 		const commandParameter = messageCreate.content.split(' ').splice(1, 3) / 2
	// 		console.log(typeof(commandParameter))
	// 		console.log(commandParameter)

	// 		// await messageCreate.channel.send(commandParameter.type)
	// 	}catch{
	// 		await messageCreate.channel.send('Erro! comando inválido')
	// 	};
	// }

	if (command === 'teste'){
		console.log(messageCreate)
	}
	if (command === 'info'){
		console.log('Message')
		console.log(messageCreate)
		console.log('member')
		console.log(messageCreate.author)
		console.log(member.roles)
	}
	// if(command === "atividade"){
	// 	const commandParameter = messageCreate.content.split(' ').pop()
	// 	console.log(commandParameter)
	// 	client.user.setActivity(commandParameter)
	// }
});


client.login(config.token);