const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { sep } = require("path");
const { success, error, warning } = require("log-symbols"); 
const client = new Client();


client.on("ready", () => {
console.log("[ -- { | DemonicSquadBot activo | } -- ]")
console.log(`${client.user.id}`)

  client.user.setPresence({
     status:"online",
     activity: {
       name: "/help",
       type: "PLAYING"
     }
  })


  });

["commands", "aliases"].forEach(x => client[x] = new Collection());
const load = (dir = "/app/commands/") => {

	readdirSync(dir).forEach(dirs => {
	
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));
		for (const file of commands) {
			const pull = require(`${dir}/${dirs}/${file}`);
			if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
				if (client.commands.get(pull.help.name)) return console.warn(`${warning} existen dos comando con el nombre: ${pull.help.name}.`);
				client.commands.set(pull.help.name, pull);
				console.log(`${success} Comando cargado: ${pull.help.name}.`);

			}
			else {
			
				console.log(`${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
		
				continue;
			}

			if (pull.help.aliases && typeof (pull.help.aliases) === "object") {
				pull.help.aliases.forEach(alias => {
					
					if (client.aliases.get(alias)) return console.warn(`${warning} existen dos comandos con el mismo alias: ${alias}`);
					client.aliases.set(alias, pull.help.name);
				});
			}
		}

	});
};


load();


client.on("message", async (message, msg ) => {
  if (message.author.bot || !message.guild) return;
	const prefix = ".";
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();

	let command;
  
	//if (!message.member) message.member = await message.guild.fetchMember(message.author);

	if (!message.content.startsWith(prefix)) return;

	if (cmd.length === 0) return;
	if (client.commands.has(cmd)) command = client.commands.get(cmd);
	else if (client.aliases.has(cmd)) command = client.commands.get(client.aliases.get(cmd));

	if (command) command.run(client, message, args, prefix);

client.channels.cache.get("940042211012276234").send(new MessageEmbed().setDescription("El usuario "+message.author.tag+" ejecutó el comando: **__"+cmd+"__**"))
client.channels.cache.get("935896178095173632").send(new MessageEmbed().setDescription("El usuario "+message.author.tag+" ejecutó el comando: **__"+cmd+"__**"))

});

const fetch = require('node-fetch')

setInterval(async () => {
  await fetch('https://demonic-squad.glitch.me').then(console.log('Pinged!'))
}, 240000)

// Eventos

client.on("guildCreate", async guild => {

const embed = new MessageEmbed()
.setColor("#2f3136")
.setAuthor("Entre a un nuevo servidor.", client.user.avatarURL())
.setDescription("• **Nombre:** " +guild.name+"\n• ID: "+guild.id+"\n• Usuarios: "+guild.memberCount+"\n• Canales: "+guild.channels.cache.size+"\n• Roles: "+guild.roles.cache.size)
.setFooter("Únete con .join [ Argumentos ]", client.user.avatarURL())
client.channels.cache.get("940042097262727179").send(embed)
});

client.on("guildCreate", async guild => {

const embed = new MessageEmbed()
.setColor("#2f3136")
.setAuthor("Entre a un nuevo servidor.", client.user.avatarURL())
.setDescription("• **Nombre:** " +guild.name+"\n• ID: "+guild.id+"\n• Usuarios: "+guild.memberCount+"\n• Canales: "+guild.channels.cache.size+"\n• Roles: "+guild.roles.cache.size)
.setFooter("Únete con .join [ Argumentos ]", client.user.avatarURL())
client.channels.cache.get("935896108570386454").send(embed)
});

client.on("guildDelete", async guild => {

const embed = new MessageEmbed()
.setColor("#2f3136")
.setAuthor("Me removieron de un servidor.", client.user.avatarURL())
.setDescription("• **Nombre:** "+guild.name+"\n• ID: "+guild.id+"\n• Owner: "+guild.owner.user.tag+" [ "+guild.owner.user.id+" ]\n• Usuarios: "+guild.memberCount+"\n• Canales: "+guild.channels.cache.size+"\n• Roles: "+guild.roles.cache.size)
client.channels.cache.get("940042177734656110").send(embed)
});
client.on("guildDelete", async guild => {

const embed = new MessageEmbed()
.setColor("#2f3136")
.setAuthor("Me removieron de un servidor.", client.user.avatarURL())
.setDescription("• **Nombre:** "+guild.name+"\n• ID: "+guild.id+"\n• Owner: "+guild.owner.user.tag+" [ "+guild.owner.user.id+" ]\n• Usuarios: "+guild.memberCount+"\n• Canales: "+guild.channels.cache.size+"\n• Roles: "+guild.roles.cache.size)
client.channels.cache.get("935896140052856953").send(embed)
});

client.login(process.env.TOKEN);