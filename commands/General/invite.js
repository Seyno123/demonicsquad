const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const embed = new MessageEmbed()
.setColor("#2f3136")
.setDescription(`[DemonicSquadBot](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)

message.channel.send(embed)

}                                   

exports.help = {
  name: "invite",
  aliases:[],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Genera la invitación del bot",
  category: "General"
  
}