const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const kingsxpembed = new Discord.RichEmbed()
	.setTitle("King's Castle")
	.setDescription("Xp gained in different difficulties of King's Castle Dungeon in one run.")
	.setThumbnail('https://i.imgur.com/r5a49IH.png')
	.addField('Insane', commas(dungeonxp.kci[0]), true)
	.addField('Nightmare', commas(dungeonxp.kcn[0]), true)
	.addField('Insane (VIP Pass)', commas(dungeonxp.kci[1]), true)
	.addField('Nightmare (VIP Pass)', commas(dungeonxp.kcn[1]), true);

exports.run = (message, bot) => {
	kingsxpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(kingsxpembed);
}