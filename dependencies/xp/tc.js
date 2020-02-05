const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const canalsxpembed = new Discord.RichEmbed()
	.setTitle("The Canals")
	.setDescription("Xp gained in different difficulties of The Canals Dungeon in one run.")
	.setThumbnail('https://i.imgur.com/L6VspSM.png')
	.addField('Insane', commas(dungeonxp.tci[0]), true)
	.addField('Nightmare', commas(dungeonxp.tcn[0]), true)
	.addField('Insane (VIP Pass)', commas(dungeonxp.tci[1]), true)
	.addField('Nightmare (VIP Pass)', commas(dungeonxp.tcn[1]), true);
	
exports.run = (message, bot) => {
	canalsxpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(canalsxpembed);
};