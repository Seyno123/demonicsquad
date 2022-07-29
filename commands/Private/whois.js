const { MessageEmbed } = require('discord.js');
var geoip = require('geoip-lite');

exports.run = async(client, msg, args) => {

if(msg.guild.name === "₊˚✧ 🎅꒱ 彡Barderos ˚❄‧₊˚") return;
if(msg.guild.id === "659803789049593867") return;

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(msg.author.id)) return;

var ip = args.join(" ")
var geo = geoip.lookup(ip)
console.log(geo)
const embed = new MessageEmbed()
.setColor("BLACK")
.setAuthor("Demonic Squad", client.user.avatarURL())
.setDescription(`Información de IP: ${geoip.pretty(ip)}`)
.addField(`• __Limite de puertos:__`, "```"+geo.range+"```")
.addField(`• __Pais:__`, "```"+geo.country+"```")
.addField(`• __Region:__`, "```"+geo.region+"```")
.addField(`• __Zona horaria:__`, "```"+geo.timezone+"```")
.addField(`• __Ciudad:__`, "```"+geo.city+"```")
.addField(`• __Laltitud y longitud:__`, "```"+geo.ll+"```")
.addField(`• __Area:__`, "```"+geo.area+"```")
.setFooter("Demonic Squad", client.user.avatarURL())
msg.channel.send(embed)

}

exports.help = {
  name: "whois",
  aliases:[],
  usage: "[ Argumentos : IP]",
  description: "Información de una dirección IP",
  category: "Private"
  
}
