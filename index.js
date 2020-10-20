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

    if (message.content.startsWith(`${prefix}test`))
        message.channel.send("This test works")
    
       //ban
       if (message.content.startsWith(`${prefix}ban`)) {
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('You do not have permission to ban users!'); }
    
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('I don\'t have the permission for ban users!'); }
    
    if (message.mentions.users.size === 0) { return message.channel.send('You need to mention a user!'); }
    let banMember = message.guild.member(message.mentions.users.first());
    if (!banMember) { return message.channel.send('User not found!'); }
    
            banMember.ban().then((member) => {
                message.channel.send(member.displayName + " has been successfully kicked from the server.");
            })
        }
        //kick
        if (message.content.startsWith(`${prefix}kick`)) {
            if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('You do not have permission to kick users!'); }
        
        if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('I don\'t have the permission for kick users!'); }
        
        if (message.mentions.users.size === 0) { return message.channel.send('You need to mention a user!'); }
        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('User not found!'); }
        
                kickMember.kick().then((member) => {
                    message.channel.send(member.displayName + " has been successfully kicked from the server.");
                })
            }
})

client.login(token);
