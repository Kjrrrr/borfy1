const Discord = require('discord.js');

const Util = require('discord.js');
    client = new Discord.Client({sisableEveryone: true})
 const devs = ['374692744301379584'];
const adminprefix = "R";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wa')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'll')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/raid__1");
      message.channel.sendMessage(`**  ${argresult} اتغيرت حالتك الى :white_check_mark:**`)
  }
  });

client.on('ready', () => {

console.log('Kjrr.');

});

client.login(process.env.BOT_TOKEN);
