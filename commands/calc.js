const Discord = require("discord.js");

exports.run = (args, message, bot, cmds) => {
    let commands = bot.commands;
    if (args[0]) {
        let identifier = args[0];
        if (identifier == 'lvl' || identifier == 'level') return commands.get('lvlcalc').run(message, args, bot);
        else if (identifier == 'run' || identifier == 'runs') return commands.get('runcalc').run(message, args, bot, cmds);
        else if (identifier == 'runrange' || identifier == 'rr') return commands.get('runrange').run(message, args, bot, cmds);
        else if (identifier == 'pot' || identifier == 'potcalc') return commands.get('potcalc').run(message, args, bot);
        else if (identifier == 'sellcost' || identifier == 'sc') return commands.get('sellcostcalc').run(message, args, bot);
        else if (identifier == 'bosshealth' || identifier == 'bh') return commands.get('brhealth').run(message, args, bot);
        else {
            let calcerror = new Discord.RichEmbed()
                .setColor(bot.colors.red_dark)
                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                .setDescription(`:x: **Error** :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}calc level\n-> ${bot.config.prefix}calc runs\n-> ${bot.config.prefix}calc pot\n-> ${bot.config.prefix}calc sellcost\n-> ${bot.config.prefix}calc bosshealth`)
                .setTimestamp()
                .setFooter("Dungeon Quest • Error")
            return message.channel.send(calcerror);
        };
    } else {
        let calcerror = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .setDescription(`:x: **Error** :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}calc level\n-> ${bot.config.prefix}calc runs\n-> ${bot.config.prefix}calc pot\n-> ${bot.config.prefix}calc sellcost\n-> ${bot.config.prefix}calc bosshealth`)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(calcerror);
    };
};
