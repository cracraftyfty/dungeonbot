const Discord = require("discord.js");

exports.run = (message, args, bot) => {
    if (args[1] != null && args[2] != null) {
        if (Number(args[1]) >= 0 && Number(args[2]) >= 0) {
            if (!isNaN(args[1]) && !isNaN(args[2])) {
                if (Number(args[2]) <= 10) {
                    if( args[1] <= 20) {
                        var tiers = args[1];
                        var players = args[2];
                        var table=[[1.8,2.7,3.6,4.5,5.5,6.4,7.3,8.2,9.1,10],[2,3,4,5,6,7,8,9,10,11],[2.2,3.3,4.4,5.5,6.6,7.7,8.8,9.9,11,12.1],[2.3,3.5,4.7,5.9,7.1,8.3,9.5,10.7,11.9,13.1],[2.6,3.9,5.2,6.5,7.8,9.1,10.4,11.7,13,14.3],[2.8,4.2,5.6,7,8.4,9.8,11.2,12.6,14,15.4],[3,4.5,6,7.5,9,10.6,12.1,13.6,15.1,16.6],[3.2,4.8,6.5,8.1,9.7,11.4,13,14.6,16.3,17.9],[3.4,5.2,6.9,8.7,10.4,12.2,13.9,15.7,17.4,19.2],[3.7,5.6,7.4,9.3,11.2,13.1,14.9,16.8,18.7,20.5],[3.9,5.9,7.9,9.9,11.9,13.9,15.9,17.9,19.9,21.9],[4.2,6.3,8.5,10.6,12.7,14.9,17,19.1,21.2,23.4],[4.5,6.7,9,11.3,13.5,15.8,18.1,20.3,22.6,24.9],[4.8,7.2,9.6,12,14.4,16.8,19.2,21.6,24,26.4],[5,7.6,10.1,12.7,15.2,17.8,20.3,22.9,25.4,28],[5.3,8,10.7,13.4,16.1,18.8,21.5,24.2,26.9,29.6],[5.6,8.5,11.3,14.2,17,19.9,22.7,25.6,28.4,31.3],[6,9,12,15,18,21,24,27,30,33],[6.3,9.4,12.6,15.8,18.9,22.1,25.2,28.4,31.6,34.7],[6.6,9.9,13.3,16.6,19.9,23.2,26.6,29.9,33.2,36.5]];
                        health = table[tiers-1][players-1]
                        const output = new Discord.RichEmbed()
                            .setColor(bot.colors.gold)
                            .setThumbnail('https://vignette.wikia.nocookie.net/dungeonquestroblox/images/9/9f/DQ_Creature3.png/revision/latest/scale-to-width-down/300?cb=20191109224132')
                            .setTitle('Boss Health Calculator')
                            .setDescription(`-> Tier: **${args[1]}**\n-> Number of players: **${args[2]}**\n-> Boss Health: **${health}T**`)
                            .setTimestamp()
                            .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
                        return message.channel.send(output)
                        } else {
                            const arg1error = new Discord.RichEmbed()
                                .setColor(bot.colors.red_dark)
                                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                                .setDescription(`:x: **Error** :x:\n\nTiers in a Boss Raid cannot be more than 20 as per current upgrade`)
                                .setTimestamp()
                                .setFooter("Dungeon Quest • Error")
                            return message.channel.send(arg1error);
                        };
                } else {
                    const arg2error = new Discord.RichEmbed()
                        .setColor(bot.colors.red_dark)
                        .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                        .setDescription(`:x: **Error** :x:\n\nPlayers per Raid cannot be more than 10`)
                        .setTimestamp()
                        .setFooter("Dungeon Quest • Error")
                    return message.channel.send(arg2error);
                };
            } else {
                const interror = new Discord.RichEmbed()
                    .setColor(bot.colors.red_dark)
                    .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                    .setDescription(`:x: **Error** :x:\n\n${message.author.username}, Number of Tiers or number of players has to be an integer`)
                    .setTimestamp()
                    .setFooter("Dungeon Quest • Error")
                return message.channel.send(interror);
            };
        } else {
            const negerror = new Discord.RichEmbed()
                .setColor(bot.colors.red_dark)
                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                .setDescription(`:x: **Error** :x:\n\n${message.author.username}, Number of Tiers or number of players cannot be in negative`)
                .setTimestamp()
                .setFooter("Dungeon Quest • Error")
            return message.channel.send(negerror);
        };
    } else {
        const error = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .setDescription(`:x: **Error** :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}calc bosshealth [tier] [players]`)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(error);
    };
};