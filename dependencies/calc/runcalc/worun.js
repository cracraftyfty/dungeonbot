const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");

exports.run = (message, args, xpleft, currentlvl, Targetlvl, bot) => {
    if(xpleft > 0){
    let finalxpwoe = Math.round(xpleft/(dungeonxp.woe[0]));
    let finalxpwom = Math.round(xpleft/(dungeonxp.wom[0]));
    let finalxpwoh = Math.round(xpleft/(dungeonxp.woh[0]));
    let finalxpwoi = Math.round(xpleft/(dungeonxp.woi[0]));
    let finalxpwon = Math.round(xpleft/(dungeonxp.won[0]));
    let finalxpwoevip = Math.round(xpleft/(dungeonxp.woe[1]));
    let finalxpwomvip = Math.round(xpleft/(dungeonxp.wom[1]));
    let finalxpwohvip = Math.round(xpleft/(dungeonxp.woh[1]));
    let finalxpwoivip = Math.round(xpleft/(dungeonxp.woi[1]));
    let finalxpwonvip = Math.round(xpleft/(dungeonxp.won[1]));

    const woxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('XP Calculator')
        .setDescription(`Number of Winter Outpost runs required to reach level ${parseInt(Targetlvl)} from level ${currentlvl}`)
        .setThumbnail(`https://i.imgur.com/ITszQas.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Easy', `${numberWithCommas(finalxpwoe)}`, true)
        .addField('Medium', `${numberWithCommas(finalxpwom)}`, true)
        .addField('Hard', `${numberWithCommas(finalxpwoh)}`, true)
        .addField('Insane', `${numberWithCommas(finalxpwoi)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpwon)}`, true)
        .addField('Easy (VIP Pass)', `${numberWithCommas(finalxpwoevip)}`, true)
        .addField('Medium (VIP Pass)', `${numberWithCommas(finalxpwomvip)}`, true)
        .addField('Hard (VIP Pass)', `${numberWithCommas(finalxpwohvip)}`, true)
		.addField('Insane (VIP Pass)', `${numberWithCommas(finalxpwoivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpwonvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
    return message.channel.send(woxpcalc);
}else{
    const error = new Discord.RichEmbed()
                    .setColor(bot.colors.red_dark)
                    .setTitle(':x: **Error** :x:')
                    .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                    .setDescription(`${message.author.username}, Current level is to be less than the Target Level`)
                    .setTimestamp()
                    .setFooter("Dungeon Quest • Error")
                return message.channel.send(error);
  }
};