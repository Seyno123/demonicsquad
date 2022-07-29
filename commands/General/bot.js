const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

let botid = args[0];

if(!botid) return message.channel.send(new MessageEmbed().setColor("#2f3136").setDescription("Ingresa la ID del bot.")) 

const embed = new MessageEmbed()
.setColor("#2f3136")
.setAuthor("La invitación del bot ha sido generada.", client.user.avatarURL)
.addField("Mención:", `<@${botid}>`)
.addField("Invitación:", `[Click Aquí](https://discordapp.com/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot)`)

message.channel.send(embed)

}                                   

exports.help = {
  name: "bot",
  aliases:[],
  usage: "[ Argumentos : Bot ID ]",
  description: "Genera la invitación de un bot por ID",
  category: "General"
  
}