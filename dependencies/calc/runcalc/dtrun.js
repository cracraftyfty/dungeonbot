const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, currentlvl, Targetlvl, bot) => {
	if(xpleft > 0){
    let finalxpdtemin = Math.round(xpleft/(dungeonxp.dtemin[0]));
	let finalxpdtemax = Math.round(xpleft/(dungeonxp.dtemax[0]));
	let finalxpdteminvip = Math.round(xpleft/(dungeonxp.dtemin[1]));
    let finalxpdtemaxvip = Math.round(xpleft/(dungeonxp.dtemax[1]));
        
    let finalxpdtmmin = Math.round(xpleft/(dungeonxp.dtmmin[0]));
	let finalxpdtmmax = Math.round(xpleft/(dungeonxp.dtmmax[0]));
	let finalxpdtmminvip = Math.round(xpleft/(dungeonxp.dtmmin[1]));
    let finalxpdtmmaxvip = Math.round(xpleft/(dungeonxp.dtmmax[1]));

    let finalxpdthmin = Math.round(xpleft/(dungeonxp.dthmin[0]));
	let finalxpdthmax = Math.round(xpleft/(dungeonxp.dthmax[0]));
	let finalxpdthminvip = Math.round(xpleft/(dungeonxp.dthmin[1]));
    let finalxpdthmaxvip = Math.round(xpleft/(dungeonxp.dthmax[1]));

    let finalxpdtimin = Math.round(xpleft/(dungeonxp.dtimin[0]));
	let finalxpdtimax = Math.round(xpleft/(dungeonxp.dtimax[0]));
	let finalxpdtiminvip = Math.round(xpleft/(dungeonxp.dtimin[1]));
    let finalxpdtimaxvip = Math.round(xpleft/(dungeonxp.dtimax[1]));

    let finalxpdtnmin = Math.round(xpleft/(dungeonxp.dtnmin[0]));
	let finalxpdtnmax = Math.round(xpleft/(dungeonxp.dtnmax[0]));
	let finalxpdtnminvip = Math.round(xpleft/(dungeonxp.dtnmin[1]));
    let finalxpdtnmaxvip = Math.round(xpleft/(dungeonxp.dtnmax[1]));


    const dtxpcalc = new Discord.RichEmbed()
		.setColor("#daa520")
		.setTitle('Round Calculator')
		.setDescription(`**Maximum** Number of Desert Temple runs required to reach level ${parseInt(Targetlvl)} from level ${currentlvl}`)
		.setThumbnail(`https://vignette.wikia.nocookie.net/roblox-dungeonquest/images/5/50/Wiki-background/revision/latest?cb=20190315133854`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Easy', `${numberWithCommas(finalxpdtemin)}`, true)
        .addField('Medium', `${numberWithCommas(finalxpdtmmin)}`, true)
        .addField('Hard', `${numberWithCommas(finalxpdthmin)}`, true)
		.addField('Insane', `${numberWithCommas(finalxpdtimin)}`, true)
		.addField('Nightmare', `${numberWithCommas(finalxpdtnmin)}`, true)
		.addField('Easy (VIP Pass)', `${numberWithCommas(finalxpdteminvip)}`, true)
        .addField('Medium (VIP Pass)', `${numberWithCommas(finalxpdtmminvip)}`, true)
        .addField('Hard (VIP Pass)', `${numberWithCommas(finalxpdthminvip)}`, true)
		.addField('Insane (VIP Pass)', `${numberWithCommas(finalxpdtiminvip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpdtnminvip)}`, true)
		.setTimestamp()
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
	return message.channel.send(dtxpcalc)
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