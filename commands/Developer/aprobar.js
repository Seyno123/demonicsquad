const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const dev = ["932334929721819226"]   
if (!dev.includes(message.author.id)) return;

let capo = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let role = message.guild.roles.cache.find(r => r.name === "Verificado | Demonic Squad");

if(!role) return message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ El rol principal no está creado.```"))
if(!capo) return message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ Argumentos faltantes.```"))

capo.roles.add(role);

message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Usuario aprobado```"))

}

exports.help = {
  name:"aprobar",
  aliases:["add"],
  usage:"[ Argumentos : User Mention ]",
  description:"Agrega el rol verificado para dar acceso al servidor de Demonic Private",
  category:"Developer"
  
}