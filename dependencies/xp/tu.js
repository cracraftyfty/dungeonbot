const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const underworldxpembed = new Discord.RichEmbed()
		.setTitle("The Underworld")
		.setDescription("Xp gained in different difficulties of The Underworld Dungeon in one run.")
		.setThumbnail('https://i.imgur.com/B8dDzLN.png')
		.addField('Insane', commas(dungeonxp.tui[0]), true)
		.addField('Nightmare', commas(dungeonxp.tun[0]), true)
		.addField('Insane (VIP Pass)', commas(dungeonxp.tui[1]), true)
		.addField('Nightmare (VIP Pass)', commas(dungeonxp.tun[1]), true);

exports.run = (message, bot) => {
    underworldxpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(underworldxpembed);
};