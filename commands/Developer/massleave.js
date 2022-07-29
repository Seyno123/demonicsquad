const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const dev = ["932334929721819226", "746172077983268896", "948368692981407854"]  
if (!dev.includes(message.author.id)) return;

          try {
            let data = [];
            client.guilds.cache.forEach(x => {
              if(x.id === "935880059498168421" || x.id === "935892194236182638") return;
                if (x.memberCount <= 15) { 
                    x.leave()
                  message.channel.send(new MessageEmbed().setDescription(`${x.name} - ${x.memberCount}\n`))
                }
            });
            if (data.length > 0) {
                data.sort();
                data = `🔹 ` + data.join('\n🔹');
            }
            else {
                data = "Error :x: No se encontró ningún servidor.";
            }
        } catch (err) {
          message.channel.send(new MessageEmbed().setDescription("Error :x: Sucedió algo inesperado."));
        }
}
    

exports.help = {
  name: "leaveall",
  aliases:["lall", "massleave", "massl"],
  usage: "[ Sin Argumentos : Uso Independiente ]",
  description: "El bot se va de todos los servidores con menos de 15 usuarios.",
  category: "Developer"
  
}