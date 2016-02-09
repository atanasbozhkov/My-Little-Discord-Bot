var DiscordClient = require('discord.io');
var bot = new DiscordClient({
    autorun: true,
    email: "nasitoo@gmail.com",
    password: "nascobotpass"
    //OR
    //token: ""
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "bot init") {
        bot.sendMessage({
            to: channelID,
            message: "ebi si maikata glupak"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    console.log(user + ' has spoken');
    if (message === "hey bot") {
        if(user == 'Nasco'){
            bot.sendMessage({
                to: channelID,
                message: "Hey Nasco"
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "qj mi kura " + user
            });
        }
        
    }
    
});