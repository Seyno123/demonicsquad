const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

exports.run = async(client, message, args) => { 

    var general = client.commands.filter(cmd => cmd.help.category == "General")
    var Privados = client.commands.filter(cmd => cmd.help.category === "Private")
    var Developer = client.commands.filter(cmd => cmd.help.category === "Developer")   

    var categorias = [["General", general], 
                      ["Privados", Privados],
                      ["Developer", Developer]]

var category = [general]
var category2 = [Privados]
var category3 = [Developer]

const embed = new Discord.MessageEmbed()
.setColor("#2f3136") 
.setTitle("[ Información | Demonic Squad ]")
.setURL("https://discord.com/oauth2/authorize?client_id="+client.user.id+"&permissions=2146958847&scope=bot")
.setAuthor("Demonic Squad", "https://cdn.discordapp.com/attachments/772238791586742272/772245542277349376/DemonicGif.gif")
.setDescription("• **__Cualquier consulta o falla, comunicarse con__** <@932334929721819226>")
.setImage("https://cdn.discordapp.com/attachments/772238791586742272/772238827985043476/BannerDemonic.png")
.setFooter(".help <command> para más información", "https://cdn.discordapp.com/attachments/772238791586742272/772245542277349376/DemonicGif.gif") 

    category.forEach(categoria => {
      var msg = "Aún no hay comandos en esta categoría."
     var map2 = categoria.map(cmd => ``+cmd.help.name).join(", ") || msg    
     embed.addField("• __Lista de comandos Públicos:__", "```"+map2+"```")
});
    
    category2.forEach(categoria => {
      var msg = "Aún no hay comandos en esta categoría."
      var map = categoria.map(cmd => ``+cmd.help.name).join(", ") || msg
      embed.addField("• __Lista de comandos Privados:__", "```"+map+"```")

    });

  category3.forEach(categoria => {
  var msg = "Aún no hay comandos en esta categoría."
  var map3 = categoria.map(cmd => ``+cmd.help.name).join(", ") || msg
 embed.addField("• __Lista de comandos Developer:__", "```"+map3+"```")

    
});

message.channel.send(embed)

    }

exports.help = {
  name: "comandos",
  aliases:["commands"],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Panel de comandos",
  category: "General"
  
}