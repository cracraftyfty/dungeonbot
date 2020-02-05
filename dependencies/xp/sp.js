const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const samuraixpembed = new Discord.RichEmbed()
		.setTitle("Samurai Palace")
		.setDescription("Xp gained in different difficulties of Samurai Palace Dungeon in one run.")
		.setThumbnail('https://i.imgur.com/e0tlfOu.png')
		.addField('Insane', commas(dungeonxp.spi[0]), true)
		.addField('Nightmare', commas(dungeonxp.spn[0]), true)
		.addField('Insane (VIP Pass)', commas(dungeonxp.spi[1]), true)
		.addField('Nightmare (VIP Pass)', commas(dungeonxp.spn[1]), true);

exports.run = (message, bot) => {
	samuraixpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(samuraixpembed);
};