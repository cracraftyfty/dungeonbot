const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const ooxpembed = new Discord.RichEmbed()
		.setTitle("Orbital Outpost")
		.setDescription("Xp gained in different difficulties of Orbital Outpost Dungeon in one run.")
		.setThumbnail('https://cdn.discordapp.com/emojis/671087461262426112.png?v=1')
		.addField('Insane', commas(dungeonxp.ooi[0]), true)
		.addField('Nightmare', commas(dungeonxp.oon[0]), true)
		.addField('Insane (VIP Pass)', commas(dungeonxp.ooi[1]), true)
		.addField('Nightmare (VIP Pass)', commas(dungeonxp.oon[1]), true);

exports.run = (message, bot) => {
	ooxpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(ooxpembed);
};