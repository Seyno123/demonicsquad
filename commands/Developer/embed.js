const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const dev = ["932334929721819226"]   
if (!dev.includes(message.author.id)) return;

  var mensaje = args.join(" ");
  
  const embed = new MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setDescription(mensaje)
  .setColor("#23272a")
  message.channel.send(embed)

}

exports.help = {
  name: "embed",
  aliases:[],
  usage: "[ Argumentos : Mensaje ]",
  description: "Genera un mensaje embed con el texto que quieras.",
  category: "Developer"
  
}