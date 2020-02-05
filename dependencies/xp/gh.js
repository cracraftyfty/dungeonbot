const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const ghxpembed = new Discord.RichEmbed()
	.setTitle("Ghastly Harbor")
	.setDescription("Xp gained in different difficulties of Ghastly Harbor Dungeon in one run.")
	.setThumbnail('https://i.imgur.com/LVr8lir.png')
	.addField('Insane', commas(dungeonxp.ghi[0]), true)
	.addField('Nightmare', commas(dungeonxp.ghn[0]), true)
	.addField('Insane (VIP Pass)', commas(dungeonxp.ghi[1]), true)
	.addField('Nightmare (VIP Pass)', commas(dungeonxp.ghn[1]), true);

exports.run = (message, bot) => {
	ghxpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(ghxpembed);
};