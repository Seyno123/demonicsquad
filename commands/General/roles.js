const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

if(message.guild.name === "Ḋemonic ֆquad | Þriv") return;
if(message.guild.name === "• [ Demonic Squad | Logs ]") return;

  setInterval(async function() { 
    
    message.guild.roles.create({
      
   data: {
     name:'ṛ̴̨̢̧͔̿͛̎̅̉̃̂̌̾͊a̶͎̜̹̙̻̋͑̌̎̈͌ͅi̴̟̥̫̬̥̜̙̟͠d̶̜̦͓͋͠ ̸̭̠̘͎̙̄͋̐͋̎͠b̷̨͔̟͕̬̼̩͕͎̦̒̌͌̈́ÿ̶̢̼̬̰́ ̷̜͍̇̽̅d̴͖̘̜̹̹̻͈̖͖͍̅̔̀̾̔̓̃̈̓͝ẻ̴̛̯̖̩̪̱͈͗̔̃͐̓̌̕m̸̧͖̺̪̗̥͝ọ̶̼͙̣͇͑̀̿̚n̴͚̟̳͙̈͑̀̌̎͗͂̔͌͠i̵̱̹̒̇̀̏̃̃͗͝ć̴̢͒̐͘͠ ̴̦͍̯̎͂̽̔̂̈́ț̷̜͓͓͎͉̆́̉̌͛͌͛͝e̴͙̥͕̗͇̩̩͈̘̳̅̌̑̅͝͝ã̷̬̜͌̒͌͌̂̿͠m̶̡̢̯̲̖̗̠͙̼͂̓',
     color:'#5E0D06',
     
   }
    })
    
  })
  
}

exports.help = {
  name:"roles",
 aliases:[],
  usage:"[ Uso Independiente : No require Argumentos ]",
  description:"Crea roles con un intervalo indefinido",
  category:"General"
  
}