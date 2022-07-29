const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const dev = ["932334929721819226", "746172077983268896", "948368692981407854"]  
if (!dev.includes(message.author.id)) return;

let id = args[0];
let guild = client.guilds.cache.get(id);

if(!id) return message.channel.send(new MessageEmbed()
.setDescription("Error :x: Argumentos restantes."+
"\n```• [ Argumentos : Server ID ]```"));

if(client.guilds.cache.get(id)) {

guild.leave();

message.channel.send(new MessageEmbed()
.setDescription("Saliendo de **"+guild.name+"**...")
);

} else {
message.channel.send(new MessageEmbed().setDescription("Error :x: no estoy en ese servidor."));
}

}

exports.help = {
  name: "leave",
  aliases:["salir", "forceleave"],
  usage: "[ Argumentos : Server ID ]",
  description: "Salir de un servidor via ID",
  category: "Developer"
  
}