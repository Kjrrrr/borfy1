const Discord = require('discord.js');

const Util = require('discord.js');
    client = new Discord.Client({sisableEveryone: true})
 const devs = ['392414705873977346'];
const adminprefix = "K";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'playing')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} البتاع اتغير الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'watching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} البتاع اتغير الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'listen')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} البتاع اتغير الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'streaming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Taaino");
      message.channel.sendMessage(`**  ${argresult} البتاع اتغير الى :white_check_mark:**`)
  }
  });


Client.login(process.env.BOT_TOKEN);
