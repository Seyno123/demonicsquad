const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "₊˚✧ 🎅꒱ 彡Barderos ˚❄‧₊˚") return;

const dev = ["932334929721819226"]   
if (!dev.includes(message.author.id)) return;

let channelNuke = message.channel
  console.log(channelNuke.position)

  channelNuke.delete()

 let canalNukeado = await message.guild.channels.create(channelNuke.name, {
    type: "TEXT",
    parent: channelNuke.parentID
  })

  canalNukeado.setPosition(channelNuke.position)
canalNukeado.send(new MessageEmbed().setColor("BLACK").setDescription("```Canal nukeado correctamente.```"))

}

exports.help = {
  name: "nuke",
  aliases:[],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Nukea el canal",
  category: "Developer"
  
}
