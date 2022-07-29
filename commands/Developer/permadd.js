const { MessageEmbed } = require('discord.js');
const discord = require('discord.js');

exports.run = async(client, msg, args) => {
  
const db = require('megadb');
let squad = new db.crearDB('squad');

const dev = ["932334929721819226"]   
if (!dev.includes(msg.author.id)) return;
  
  let user = msg.mentions.users.first();
  if(msg.mentions.users.size < 1 || !user)return msg.channel.send(new MessageEmbed().setColor("#2f3136").setDescription("Error :x: Debes mencionar a un usuario."));
  if(user.bot)return msg.channel.send(new MessageEmbed().setColor("#2f3136").setDescription("Error :x: Un bot no puede ser registrado."));
  if(squad.has(user.id))return msg.channel.send(new MessageEmbed().setColor("#2f3136").setDescription("Error :x: Este usuario ya está registrado."))  
  squad.establecer(user.id, user.tag);
  msg.channel.send(new MessageEmbed().setDescription("**Usuario __"+user.tag+"__ registrado.**").setColor(0x000));

}

exports.help = {
  name:"dataperm",
  aliases:["dp"],
  usage:"[ Argumentos : User Mention ]",
  description:"Dará permisos para uso de los comandos privados",
  category:"Developer"
  
}