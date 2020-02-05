const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, currentlvl, Targetlvl,  bot) => {

if(xpleft>0){
    let finalxpooi = Math.round(xpleft/(dungeonxp.ooi[0]));
	let finalxpoon = Math.round(xpleft/(dungeonxp.oon[0]));
    let finalxpooivip = Math.round(xpleft/(dungeonxp.ooi[1]));
    let finalxpoonvip = Math.round(xpleft/(dungeonxp.oon[1]));

    const ooxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of Orbital Outpost runs required to reach level ${parseInt(Targetlvl)} from level ${currentlvl}`)
        .setThumbnail(`https://i.imgur.com/bEEBOXR.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxpooi)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpoon)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxpooivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpoonvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(ooxpcalc)
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