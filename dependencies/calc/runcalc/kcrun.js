const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, currentlvl, Targetlvl, bot) => {
    if(xpleft > 0){
    let finalxpkci = Math.round(xpleft/(dungeonxp.kci[0]));
	let finalxpkcn = Math.round(xpleft/(dungeonxp.kcn[0]));
    let finalxpkcivip = Math.round(xpleft/(dungeonxp.kci[1]));
    let finalxpkcnvip = Math.round(xpleft/(dungeonxp.kcn[1]));

    const kcxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of Kings Castle runs required to reach level ${parseInt(Targetlvl)} from level ${currentlvl}`)
        .setThumbnail(`https://i.imgur.com/r5a49IH.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxpkci)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpkcn)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxpkcivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpkcnvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(kcxpcalc)
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