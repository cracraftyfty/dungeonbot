const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, currentlvl, Targetlvl, bot) => {
    if(xpleft > 0){
    let finalxptci = Math.round(xpleft/(dungeonxp.tci[0]));
	let finalxptcn = Math.round(xpleft/(dungeonxp.tcn[0]));
    let finalxptcivip = Math.round(xpleft/(dungeonxp.tci[1]));
    let finalxptcnvip = Math.round(xpleft/(dungeonxp.tcn[1]));

    const tcxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of The Canal runs required to reach level ${parseInt(Targetlvl)} from level ${currentlvl}`)
        .setThumbnail(`https://i.imgur.com/L6VspSM.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxptci)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxptcn)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxptcivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxptcnvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(tcxpcalc);
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