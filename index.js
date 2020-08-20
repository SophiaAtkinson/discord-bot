const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
    
client.once('ready', () => {
    console.log('Ready')

    client.user.setActivity("!help", {
        type: "STREAMING",
        url: "https://www.twitch.tv/user"
    });
})
client.on('message', message => {
    console.log(message.content);
    //Help Cmd
    if (message.content.startsWith(`${prefix}test`))
        message.channel.send("This test works")

})



client.login(token);
