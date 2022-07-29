const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args, prefix) => {

const data = [];
		const { commands } = message.client;

		if (!args.length) {
return message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ Argumentos faltantes.```").setAuthor("Demonic Squad", client.user.avatarURL()).setFooter("Uso: "+prefix+"help <command>", client.user.avatarURL()))
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ El comando está mal escrito o es invalido.```"));
		}

const embed2 = new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription("• **Nombre:** "+command.help.name+
"\n• Alias: "+command.help.aliases+
"\n• Uso: "+command.help.usage+
"\n• Descripción: "+command.help.description+
"\n• Categoría: "+command.help.category)
message.channel.send(embed2)

}

exports.help = {
  name: "help",
  aliases:["hp"],
  usage: "[ Argumentos : Comando ]",
  description: "Información del comando especificado.",
  category: "General"
}