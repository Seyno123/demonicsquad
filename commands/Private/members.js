const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {



const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return;

squad.map(false, (v, key) => `Miembro: ${v}`).then(datos => {
 
  return message.channel.send(
  new MessageEmbed()
.setColor("#2f3136") 
.setAuthor("DemonicTeam", "https://cdn.discordapp.com/attachments/766030161241178142/766030819545317456/KnotVersionPro.png")
.setThumbnail("https://cdn.discordapp.com/attachments/766030161241178142/766030819545317456/KnotVersionPro.png")
.setFooter("DemonicTeam - Members", "https://cdn.discordapp.com/attachments/766030161241178142/766030819545317456/KnotVersionPro.png")
    .addField("**Lista de Miembros.**", datos))
})

}

exports.help = {
  name:"members",
  aliases:[],
  usage:"[ Uso Independiente : No require Argumentos ]",
  description:"Lista de miembros de la Demonic Squad",
  category:"Private"
  
}