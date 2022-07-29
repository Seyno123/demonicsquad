const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return 

message.delete()
message.guild.members.cache.forEach(m => {
m.send("https://discord.gg/demonicsquad `|` https://www.demonicsquad.net/")
})

}

exports.help = {
  name:"md",
  aliases:[],
  usage:"[ Uso Independiente : No require Argumentos ]",
  description:"Envía un mensaje directo a los miembros del servidor",
  category:"Private"
  
}