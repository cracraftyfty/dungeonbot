const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const ssxpembed = new Discord.RichEmbed()
		.setTitle("Steampunk Sewers")
		.setDescription("Xp gained in different difficulties of Steampunk Sewers Dungeon in one run.")
		.setThumbnail('https://i.imgur.com/bEEBOXR.png')
		.addField('Insane', commas(dungeonxp.ssi[0]), true)
		.addField('Nightmare', commas(dungeonxp.ssn[0]), true)
		.addField('Insane (VIP Pass)', commas(dungeonxp.ssi[1]), true)
		.addField('Nightmare (VIP Pass)', commas(dungeonxp.ssn[1]), true);

exports.run = (message, bot) => {
	ssxpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(ssxpembed);
};