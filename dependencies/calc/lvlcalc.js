const Discord = require("discord.js");
const numberWithCommas = require("./../../functions/numberWithCommas.js");

exports.run = (message, args, bot) => {
    if (args[1] != null && args[2] != null) {
        if (Number(args[1]) >= 0 && Number(args[1]) < 333 && Number(args[2]) > 0 && Number(args[2]) <= 333 && Number(args[1]) < Number(args[2])) {
            let xp = 0;
            for (let x = args[1]; x < Number(args[2]); x++) xp += Math.floor((84 * Math.pow(1.13, x - 1) + 0.5));
        
            const result = new Discord.RichEmbed()
                .setColor(bot.colors.gold)
                .setTitle('Level Caclculator')
                .setThumbnail('https://i.pinimg.com/originals/50/da/8c/50da8c44ba216bd8d5c20992bc8ce939.gif')
                .setDescription(`\nFrom level: **${args[1]}**\nTo Level: **${args[2]}**\nTotal XP required: **${numberWithCommas(Math.round(xp))}**\n`)
                .setTimestamp()
                .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
            return message.channel.send(result);
        } else {
            const calcerror = new Discord.RichEmbed()
                .setColor(bot.colors.red_dark)
                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                .setDescription(`:x: **Error** :x:\n\nLevel should be under 333`)
                .setTimestamp()
                .setFooter("Dungeon Quest • Error")
            return message.channel.send(calcerror);
        };
    } else {
        const error = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .setDescription(`:x: **Error** :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}calc level [From Level] [To Level]`)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
         return message.channel.send(error);
    };
};