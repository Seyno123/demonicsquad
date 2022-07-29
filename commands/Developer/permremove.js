const { MessageEmbed } = require('discord.js');
const db = require('megadb');
let squad = new db.crearDB('squad');

exports.run = async(client, message, args) => {
  
const dev = ["932334929721819226"]   
if (!dev.includes(message.author.id)) return;

 let sujeto = message.mentions.users.first() || client.users.cache.get(args[0]);
  if(!squad.tiene(`${sujeto.id}`)) return message.reply(new MessageEmbed().setColor("#2f3136").setDescription("Error :x: El usuario no está registrado."))
  squad.eliminar(`${sujeto.id}`)
  return message.channel.send(new MessageEmbed().setColor("#2f3136").setDescription("<@"+sujeto+"> ha sido eliminado de la base."));


}

exports.help = {
  name:"dataremove",
  aliases:["dr"],
  usage:"[ Argumentos : User Mention ]",
  description:"Revocará los permisos para uso de los comandos privados",
  category:"Developer"
  
}