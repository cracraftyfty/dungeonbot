const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

exports.run = (message, bot) => {
    const desertxpembed = new Discord.RichEmbed()
    .setColor(bot.colors.gold)
    .setTitle('Desert Temple')
    .setDescription('XP gained in different difficulties of Desert temple Dungeon in one run')
    .setThumbnail('https://vignette.wikia.nocookie.net/roblox-dungeonquest/images/5/50/Wiki-background/revision/latest?cb=20190315133854')
    .addField('Easy', `${commas(dungeonxp.dtemin[0])} - ${commas(dungeonxp.dtemax[0])}`, true)
    .addField('Medium', `${commas(dungeonxp.dtmmin[0])} - ${commas(dungeonxp.dtmmax[0])}`, true)
    .addField('Hard', `${commas(dungeonxp.dthmin[0])} - ${commas(dungeonxp.dthmax[0])}`, true)
    .addField('Insane', `${commas(dungeonxp.dtimin[0])} - ${commas(dungeonxp.dtimax[0])}`, true)
    .addField('Nightmare', `${commas(dungeonxp.dtnmin[0])} - ${commas(dungeonxp.dtnmax[0])}`, true)
    .addField('Easy (VIP Pass)', `${commas(dungeonxp.dtemin[1])} - ${commas(dungeonxp.dtemax[1])}`, true)
    .addField('Medium (VIP Pass)', `${commas(dungeonxp.dtmmin[1])} - ${commas(dungeonxp.dtmmax[1])}`, true)
    .addField('Hard (VIP Pass)', `${commas(dungeonxp.dthmin[1])} - ${commas(dungeonxp.dthmax[1])}`, true)
    .addField('Insane (VIP Pass)', `${commas(dungeonxp.dtimin[1])} - ${commas(dungeonxp.dtimax[1])}`, true)
    .addField('Nightmare (VIP Pass)', `${commas(dungeonxp.dtnmin[1])} - ${commas(dungeonxp.dtnmax[1])}`, true)
    .setTimestamp()
    .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
    return message.channel.send(desertxpembed);
};