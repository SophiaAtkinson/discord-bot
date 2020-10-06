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
    
            //Kick
        if (message.content.startsWith(`${prefix}kick`)) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member
                  .kick('Optional reason that will display in the audit logs')
                  .then(() => {
                    message.reply(`Successfully kicked ${user.tag}`);
                  })
                  .catch(err => {
                    message.reply('I was unable to kick the member');
                    console.error(err);
                  });
              } else {
                message.reply("That user isn't in this guild!");
              }
            } else {
              message.reply("You didn't mention the user to kick!");
            }
          }
        //Kick End
        //Ban
        if (message.content.startsWith(`${prefix}ban`)) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member
                  .ban('Optional reason that will display in the audit logs')
                  .then(() => {
                    message.reply(`Successfully Banned ${user.tag}`);
                  })
                  .catch(err => {
                    message.reply('I was unable to Ban the member');
                    console.error(err);
                  });
              } else {
                message.reply("That user isn't in this guild!");
              }
            } else {
              message.reply("You didn't mention the user to Ban!");
            }
          }

})



client.login(token);
