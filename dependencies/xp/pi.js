const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const piratexpembed = new Discord.RichEmbed()
.setTitle('Pirate Island')
.setDescription('Xp gained in different difficulties of Pirate Island Dungeon in one run.')
.setThumbnail('https://i.imgur.com/rtLe7vH.png')
.addField('Insane',commas(dungeonxp.pii[0]), true)
.addField('Nightmare', commas(dungeonxp.pin[0]), true)
.addField('Insane (VIP Pass)', commas(dungeonxp.pii[1]), true)
.addField('Nightmare (VIP Pass)', commas(dungeonxp.pin[1]), true);

exports.run = (message, bot) => {
	piratexpembed.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	return message.channel.send(piratexpembed);
};