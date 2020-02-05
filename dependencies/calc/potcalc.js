const Discord = require("discord.js");
const numberWithCommas = require("./../../functions/numberWithCommas.js");
const upgradeList = [100, 156, 215, 278, 344, 415, 490, 570, 654, 743, 838, 938, 1044, 1157, 1276, 1403, 1537, 1679, 1830, 1990, 2159, 2339, 2529, 2731, 2945];

exports.run = (message, args, bot) => {
	if (args[1] != null && args[2] != null && args[3] != null) {
		let power = Math.round(Number(args[1].replace(/,/g, "")));
		let currentUpgrades = Math.round(Number(args[2].replace(/,/g, "")));
		let totalUpgrades = Math.round(Number(args[3].replace(/,/g, "")));
		let totalCost = 0;
		let increasePerUpgrade = 0;
		let upgradeLevel = 0;
		if (!isNaN(power) && !isNaN(currentUpgrades) && !isNaN(totalUpgrades)) {
			if (power <= 9999999 && power > 0 && currentUpgrades <= 999999 && totalUpgrades <= 999999 && currentUpgrades <= totalUpgrades) {
				let totalPower = power;
				let basePower = power;
				
				for (x = currentUpgrades; x < totalUpgrades; x++) {
					(x < 25) ? increasePerUpgrade = upgradeList[x] : increasePerUpgrade = 2945 + 220 * (x-24);
					if (increasePerUpgrade > 100000) {
						totalCost += 100000 * (totalUpgrades - x);
						break;
					} else totalCost += increasePerUpgrade;
				};
	
				for (let x = currentUpgrades; x < totalUpgrades; x++) {
					upgradeLevel = totalPower * 0.05;
					if (upgradeLevel >= 9) {
						totalPower += 10 * (totalUpgrades - x);
						break;
					} else totalPower += Math.floor(totalPower * 0.05 + 1);
				};
	
				try {
					for (let y = currentUpgrades; y > 0; y = y-1) {
						if (y < 0) break;
						(basePower * 0.05 >= 9) ? increasePerUpgrade = 10 : increasePerUpgrade = Math.floor(basePower * 0.05 + 1);
						basePower = basePower - increasePerUpgrade;
						if (Math.round(basePower) <= 0) break;
					};
				} catch (ex) {
					console.log('Basepower Calculator Timeout/Extended Operation took too long to calculate. Consider removing this option.');
					basePower = "Basepower Operation Timeout";
				};
	
				if (!basePower) basePower = '0'; else basePower = numberWithCommas(Math.round(basePower));
				const output = new Discord.RichEmbed()
					.setColor(bot.colors.gold)
					.setThumbnail('http://cdn.discordapp.com/emojis/633979217314447380.gif?v=1')
					.setTitle('Potential Calculator')
					.addField(':crossed_swords: Max Power :crossed_swords:', `${numberWithCommas(totalPower)}`)
					.addField(':crossed_swords: Base Potential :crossed_swords:', `${numberWithCommas(basePower)}`)
					.addField(':moneybag: Upgrade Cost :moneybag:', `${numberWithCommas(totalCost)}`)
					.setTimestamp()
					.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
				return message.channel.send(output)
			} else {
				const nullerror = new Discord.RichEmbed()
					.setColor(bot.colors.red_dark)
					.setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
					.setDescription(`:x: Error :x:\n\nPlease stay within normal values. The power must be under **10,000,000** and the upgrades must be under **1,000,000**`)
					.setTimestamp()
					.setFooter("Dungeon Quest • Error")
				return message.channel.send(nullerror);
			};
		} else {
			const nullerror = new Discord.RichEmbed()
				.setColor(bot.colors.red_dark)
				.setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
				.setDescription(`:x: Error :x:\n\n**One of the values is not a number or is null. Please type all the values correctly.**\n-> ${bot.config.prefix}calc pot **[**Current Power**]** **[**Current Upgrades**]** **[**Total Upgrades**]**`)
				.setTimestamp()
				.setFooter("Dungeon Quest • Error")
			   return message.channel.send(nullerror);
		};
	} else {
		const calcerror = new Discord.RichEmbed()
			.setColor(bot.colors.red_dark)
			.setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
			.setDescription(`:x: Error Using Calc Command :x:\n\n**Expected usage:**\n-> ${bot.config.prefix}calc pot **[**Current Power**]** **[**Current Upgrades**]** **[**Total Upgrades**]**`)
			.setTimestamp()
			.setFooter("Dungeon Quest • Error")
  		return message.channel.send(calcerror);
	};
};