const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const dev = ["932334929721819226"]   
if (!dev.includes(message.author.id)) return;

process.exit();


}

exports.help = {
  name: "reset",
  aliases:["rest",
           "kreset",
           "refresh"],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Resetea el proceso del bot.",
  category: "Developer"
  
}