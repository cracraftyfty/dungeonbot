const Discord = require("discord.js");

exports.run = (args, message, bot, cmds) => {
	const helpembed = new Discord.RichEmbed()
		.setTitle('• Help Center •')
		.setThumbnail(`https://media.discordapp.net/attachments/648654014593892369/649501194598875155/DQbot_help_icon.png`)
		.setDescription(`**Commands:**\n-> ${bot.config.prefix}calc\n-> ${bot.config.prefix}xp\n\nFor instructions and examples, check your direct messages from this bot!`)
		.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
		message.channel.send(helpembed);

	const dmembed = new Discord.RichEmbed()
		.setTitle('• Help Center •')
		.setThumbnail(`https://media.discordapp.net/attachments/648654014593892369/649501194598875155/DQbot_help_icon.png`)
		.setDescription('**Available Commands:**')
		.addField(`-> ${bot.config.prefix}calc level [From Level] [To Level]`, `Usage: '${bot.config.prefix}calc level 1 200'`)
		.addField(`-> ${bot.config.prefix}calc runs [level] [yourXP] [dungeon]`, `Usage: '${bot.config.prefix}calc runs 140 987654321 Steampunk Sewers -or- SS'`)
		.addField(`-> ${bot.config.prefix}calc pot [CurrentPotential] [CurrentUpgrades] [TotalUpgrades]`, `Usage: '${bot.config.prefix}calc pot 10 5 20'`)
		.addField(`-> ${bot.config.prefix}calc sellcost [Current Sell Price] [Current Upgrades] [Total Upgrades]`, `Usage: '${bot.config.prefix}calc sellcost 123456 1234 12345'`)
		.addField(`-> ${bot.config.prefix}calc bosshealth [tier] [players]`, `Usage: '${bot.config.prefix}calc bosshealth 20 10'`)
		.addField(`-> ${bot.config.prefix}xp [dungeon Name]`, `Usage: '${bot.config.prefix}xp Desert Temple'`)
		.addBlankField()
		.addField('**Tip:**','For more information regarding this bot, please look at pinned messages in <#579371154779930626> channel in the official Dungeon Quest discord.\n[Invite Dungeon Bot 3.0](https://discordapp.com/oauth2/authorize?client_id=649532040143962123&permissions=8&scope=bot)')
		.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)	
	message.author.send(dmembed).catch((err) => {console.log(`Exception found in help.js. Exception Below\n${err}`)});

	const altembed = new Discord.RichEmbed()
		.setThumbnail(`https://media.discordapp.net/attachments/648654014593892369/649501194598875155/DQbot_help_icon.png`)
		.setDescription(`**Alternatives**\n\nCommands:\n-> "${bot.config.prefix}calc sellcost" or "${bot.config.prefix}calc sc"\n-> "${bot.config.prefix}calc bosshealth" or "${bot.config.prefix}calc bh"\n\nShortforms:\n-> **Desert Temple** or **dt**\n-> **Winter Outpost** or **wo**\n-> **Pirate Island** or **pi**\n-> **Kings Castle** or **kc**\n-> **The Underworld** or **tu** or **uw**\n-> **Samurai Palace** or **sp**\n-> **The Canals** or **tc**\n-> **Ghastly Harbor** or **gh**\n-> **Steampunk Sewers** or **ss**\n-> **Boss Raids** or **br**`)
		.addBlankField()
		.setTimestamp()
		.setColor(bot.colors.gold)
		.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
	message.author.send(altembed).catch((err) => {console.log(`Exception found in help.js. Exception Below\n${err}`)});
};
	