const Discord = require('discord.js');
const f = require("node-fetch");

const client = new Discord.Client();

client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
if (message.content.includes(`what is your name`)) {
return message.channel.send(`> ${message.content} \n Hello Otaku <@${message.author.id}>, My Name Is Serena`);
 }
if (message.content.includes(`What is your name`)) {
return message.channel.send(`> ${message.content} \n Hello Otaku <@${message.author.id}>, My Name Is Serena`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
f(`https://kuki.up.railway.app/Kuki/chatbot?message=${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n  ${data.reply}`);
    });
      message.channel.stopTyping();
}
});

client.login(process.env.TOKEN)
