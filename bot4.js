const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', message => {
    if(message.content === '1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '2'){
        message.channel.send('#credit')
    }
});

client.on('message', message => {
    if(message.content === '3'){
        message.channel.send('#rep <@337629134371160065>')
    }
});

client.on('message', message => {
 if(message.content === '4'){
message.member.voiceChannel.join();
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say" ) {
let rank = message.guild.member(message.author).roles.find('name', '.');
if (!rank) return message.reply('معلش')
  message.channel.send(args.join(" "))
    message.delete();
  }
});

client.on('message', message => {
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });



client.login(process.env.BOT_TOKEN4);
