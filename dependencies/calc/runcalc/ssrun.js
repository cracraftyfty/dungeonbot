const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, currentlvl, Targetlvl, bot) => {
    if(xpleft > 0){
    let finalxpssi = Math.round(xpleft/(dungeonxp.ssi[0]));
	let finalxpssn = Math.round(xpleft/(dungeonxp.ssn[0]));
    let finalxpssivip = Math.round(xpleft/(dungeonxp.ssi[1]));
    let finalxpssnvip = Math.round(xpleft/(dungeonxp.ssn[1]));

    const ssxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of Steampunk Sewer runs required to reach level ${parseInt(Targetlvl)} from level ${currentlvl}`)
        .setThumbnail(`https://i.imgur.com/bEEBOXR.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxpssi)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpssn)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxpssivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpssnvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(ssxpcalc);
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