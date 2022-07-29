const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return 

  const guilds = client.guilds.cache.array()
var msg = message
const generateEmbed = start => {
  const current = guilds.slice(start, start + 5)
  const embed = new MessageEmbed()
   .setColor("BLACK") 
   .setTitle(`Servidores ${start + 1}-${start + current.length} de ${guilds.length}`)
  current.forEach(g => embed.addField(g.name, `• ID: ${g.id}
• Usuarios: ${g.memberCount} 
• Región: ${g.region}`))
  return embed
} 
const author = msg.author

message.channel.send(generateEmbed(0)).then(message => {
if (guilds.length <= 5) return
  message.react('➡️')
  const collector = message.createReactionCollector(
    (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,
    {time: 60000}
  )
  let currentIndex = 0
  collector.on('collect', reaction => {
    
    message.reactions.removeAll().then(async () => {
      
      reaction.emoji.name === '⬅️' ? currentIndex -= 5 : currentIndex += 5
    
      message.edit(generateEmbed(currentIndex))
     if (currentIndex !== 0) await message.react('⬅️')
    if (currentIndex + 5 < guilds.length) message.react('➡️')
    })
  })
})

}

exports.help = {
  name: "servers",
  aliases:["servidores",
             "svs",
             "map"],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Mapeo de servidores.",
  category: "Private"
  
}