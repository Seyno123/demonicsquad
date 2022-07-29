const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return 

var args1 = args.join(" ").split("|")
var id = args1[0];
var id2 = args1[1];

if(!id) return message.channel.send(new MessageEmbed()
.setDescription("Error :x: Argumentos faltantes."+
"\n```• [ Argumentos : ServerID ]```"));
if(!id2) return message.channel.send(new MessageEmbed()
.setDescription("Error :x: Argumentos faltantes."+
"\n```• [ Argumentos : Usuario ID ]```"));

try {

if(client.guilds.cache.has(id)) {

var guild = client.guilds.cache.get(id);

client.guilds.cache.get(id).members.unban(id2)
message.channel.send(new MessageEmbed()
.setDescription("Usuario <@"+id2+"> desbaneado de "+guild.name)
)

} else {
message.channel.send(new MessageEmbed()
.setDescription("Error :x: No estoy en ese servidor."))
}

} catch(e) {
message.channel.send(new MessageEmbed()
.setDescription("Error :x: Ocurrió un Error."+
"\n Posibles errores : ``` • Usuario invalido."+
                  "\n • Permisos Insuficientes.\n • No estoy en ese servidor.\n • Entre otros.```"+
                  "\n**Error detallado**```"+e+"```"))
};


}                                   

exports.help = {
  name: "unban",
  aliases:[],
  usage: "[ Argumentos : ServerID|UserID ]",
  description: "Desbanea un usuario del servidor seleccionado por ID",
  category: "Private"
  
}