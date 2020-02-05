const Discord = require("discord.js");
const numberWithCommas = require("./../../functions/numberWithCommas.js");

exports.run = (message, args, bot) => {
    if (args[1] != null && args[2] != null && args[3] != null) {
        let sellPrice = Math.round(Number(args[1]));
        let currentUpgrades = Math.round(Number(args[2]));
        let totalUpgrades = Math.round(Number(args[3]));
        let increasePerUpgrade = 0;
        if (!isNaN(sellPrice) && !isNaN(currentUpgrades) && !isNaN(totalUpgrades)) {
            if (sellPrice >= 100 && currentUpgrades >= 0 && totalUpgrades > 0 && currentUpgrades < 99999 && totalUpgrades < 99999 && sellPrice < 500000000) {
                if (currentUpgrades < totalUpgrades) {
                    try {
                        for (currentUpgrades; currentUpgrades > 0; currentUpgrades--) {
                            currentUpgrades = currentUpgrades - 1;
                            sellPrice -= Math.round(sellPrice / 6.7245896556);
                        };
                        for (x = currentUpgrades; x < totalUpgrades; x++) {
                            (x < 25) ? increasePerUpgrade = [100, 156, 215, 278, 344, 415, 490, 570, 654, 743, 838, 938, 1044, 1157, 1276, 1403, 1537, 1679, 1830, 1990, 2159, 2339, 2529, 2731, 2945][x] : increasePerUpgrade = 2945 + 220 * (x-24);
                            sellPrice = Math.round( increasePerUpgrade / 6.7245896556);
                        };
                        sellPrice = numberWithCommas(sellPrice);
                    } catch (ex) {
                        console.log("Sellcalc Overrun Timeout. Please consider disabling or removing this command to prevent further issues.");
                    };
                    const result = new Discord.RichEmbed()
                        .setColor(bot.colors.gold)
                        .setTitle('Sell Cost Caclculator')
                        .setThumbnail('https://i.pinimg.com/originals/50/da/8c/50da8c44ba216bd8d5c20992bc8ce939.gif')
                        .setDescription(`This item will sell for **~${sellPrice} Gold**\n\n **WARNING**:\nPlease advise that this command has proven to be inaccurate or mildly off of the actual sell price, use it at your own digression.`)
                        .setTimestamp()
                        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
                    return message.channel.send(result);
                } else {
                    const downgradeerror = new Discord.RichEmbed()
                        .setColor(bot.colors.red_dark)
                        .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                        .setDescription(`:x: **Error** :x:\n\nYou cannot downgrade an item`)
                        .setTimestamp()
                        .setFooter("Dungeon Quest • Error")
                    return message.channel.send(downgradeerror);
                };
            } else {
                const calcerror = new Discord.RichEmbed()
                    .setColor(bot.colors.red_dark)
                    .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                    .setDescription(`:x: **Error** :x:\n\nPlease stay within normal level ranges.`)
                    .setTimestamp()
                    .setFooter("Dungeon Quest • Error")
                return message.channel.send(calcerror);
            };
        } else {
            const argerror = new Discord.RichEmbed()
                .setColor(bot.colors.red_dark)
                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                .setDescription(`:x: **Error** :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}calc sellcost [Current Sell Price] [Current Upgrades] [Total Upgrades]`)
                .setTimestamp()
                .setFooter("Dungeon Quest • Error")
            return message.channel.send(argerror);
        };
    } else {
        const argerror = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .setDescription(`:x: **Error** :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}calc sellcost [Current Sell Price] [Current Upgrades] [Total Upgrades]`)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(argerror);
    };
};