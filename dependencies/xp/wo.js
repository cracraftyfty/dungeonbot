const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

exports.run = (message, bot) => {
    const winterxpembed = new Discord.RichEmbed()
		.setColor(bot.colors.gold)
		.setTitle('Winter Outpost')
		.setDescription('Xp gained in different difficulties of Winter Outpost Dungeon in one run')
		.setThumbnail('https://i.imgur.com/ITszQas.png')
		.addField('Easy', commas(dungeonxp.woe[0]), true)
		.addField('Medium', commas(dungeonxp.wom[0]), true)
		.addField('Hard', commas(dungeonxp.woh[0]), true)
		.addField('Insane', commas(dungeonxp.woi[0]), true)
		.addField('Nightmare', commas(dungeonxp.won[0]), true)
		.addField('Easy (VIP Pass)', commas(dungeonxp.woe[1]), true)
		.addField('Medium (VIP Pass)', commas(dungeonxp.wom[1]), true)
		.addField('Hard (VIP Pass)', commas(dungeonxp.woh[1]), true)
		.addField('Insane (VIP Pass)', commas(dungeonxp.woi[1]), true)
		.addField('Nightmare (VIP Pass)', commas(dungeonxp.won[1]), true)
		.setTimestamp()
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
	return message.channel.send(winterxpembed);
};