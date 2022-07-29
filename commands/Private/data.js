const { MessageEmbed } = require('discord.js');

exports.run = async(client, msg, args) => {

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(msg.author.id)) return;

        if(!args[0])return msg.channel.send("Debes poner la ID del servidor.");
  if(client.guilds.cache.has(args[0])) {
    let guild = client.guilds.cache.get(args[0]);
    let embed = new MessageEmbed()
    .setDescription("Datos por ID: "+guild.name+"\n**• ID:** `"+guild.id+"`\n**• Usuarios:** `"+guild.members.cache.size+"`\n**• Canales:** "+guild.channels.cache.size+"\n**• Roles**: "+guild.roles.cache.size+"\n **Imagen del servidor:** [Click Aqui]("+guild.iconURL()+")")
    .setColor("#2f3136")
    .setAuthor(guild.name+" | Datos", msg.author.displayAvatarURL)
    
    msg.channel.send(embed);
  }else {
    msg.channel.send("No estoy en ese servidor, introduce una ID valida donde este el bot.")
  }

}

exports.help = {
  name: "data",
  aliases:[],
  usage: "[ Argumentos : Server ID ]",
  description: "Información de un servidor mediante la ID",
  category: "Private"
  
}
