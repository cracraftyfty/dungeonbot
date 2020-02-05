const Discord = require("discord.js");
const fs = require('fs');

const numberWithCommas = require("./../../functions/numberWithCommas.js");

exports.run = (message, args, bot, cmds) => {
    
    var dungeonraw = [];
        dungeonraw.push(args[4])
        dungeonraw.push(args[5])
        const dname = dungeonraw.join('')
        console.log(`args0: ${args[0]} args1:${args[1]}, args2: ${args[2]}, args3: ${args[3]}, args4: ${args[4]}, args5: ${args[5]}`);
    if(args[1] != null || args[2] != null || args[3] != null || dungeon != null){ 
        if(!isNaN(args[1]) && !isNaN(args[2]) && !isNaN(args[3]) && isNaN(dname)){
            if( args[1] <= 333 && args[2] <= 333){
                var currentlvl = args[1];
                    var Targetlvl = args[2];
                    var currentXP = args[3];
               
                    
                    let currentlvlxpcalc = Math.round(84*Math.pow(1.13,(currentlvl-1)));
                    let targetlvlxpcalc = Math.round(84*Math.pow(1.13,(Targetlvl-1)));
                    let currxp = currentlvlxpcalc - currentXP;
                    let xpleft = targetlvlxpcalc - currxp;

                    console.log(`XP Left: ${xpleft}`);
                        if (dname == 'dt' || dname == 'deserttemple' || dname == 'desert temple') bot.commands.get('dtrun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'wo' || dname == 'winteroutpost' || dname == 'winter outpost') bot.commands.get('worun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'pi' || dname == 'pirateisland' || dname == 'pirate island') bot.commands.get('pirun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'kc' || dname == 'kingscastle' || dname == 'kings castle') bot.commands.get('kcrun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'tu' || dname == 'theunderworld' || dname == 'the underworld') bot.commands.get('turun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'sp' || dname == 'samuraipalace' || dname == 'samurai palace') bot.commands.get('sprun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'tc' || dname == 'thecanals' || dname == 'the canals') bot.commands.get('tcrun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'gh' || dname == 'ghastlyharbor' || dname == 'ghastly harbor') bot.commands.get('ghrun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'ss' || dname == 'steampunksewers' || dname == 'steampunk sewers') bot.commands.get('ssrun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'oo' || dname == 'orbitaloutpost' || dname == 'orbital outpost') bot.commands.get('oorun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else if (dname == 'br' || dname == 'bossraids' || dname == 'boss raids' || dname == 'boss raid') bot.commands.get('brrun').run(message, args, xpleft, currentlvl, Targetlvl, bot);
                        else {
                            const  dungeonerror = new Discord.RichEmbed()
                                .setColor(bot.colors.red_dark)
                                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                                .setDescription(`:x: **Error** :x:\n\n${message.author.username} the **${dname}** Dungeon does not exist.\nPlease enter a valid Dungeon!`)
                                .setTimestamp()
                                .setFooter("Dungeon Quest • Error")
                            return message.channel.send(dungeonerror);
                        };

                
            }else{
                const lvlerror = new Discord.RichEmbed()
                        .setColor(bot.colors.red_dark)
                        .setTitle(':x: **Error** :x:')
                        .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                        .setDescription(`${message.author.username}, Current Level and Target level are to be less than **Level 333**`)
                        .setTimestamp()
                        .setFooter("Dungeon Quest • Error")
                    return message.channel.send(lvlerror);
            }
        }else{
            const inputerror = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setTitle('**Error**')
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .addField(`Error Using ${cmds} Command!`,`Currentlevel, TargetLevel or CurrentXP should be positive integers only.`)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(inputerror);
        }
    }else{
        const nullerror = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setTitle(':x: **Error** :x:')
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .addField(`Error Using ${cmds} Command!`,`**Expected usage:**\n-> ${bot.config.prefix}calc runs [CurrentLevel] [TargetLevel] [yourXP] [dungeon] \n\nCurrentlevel, TargetLevel or CurrentXP should be positive integers only.`)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(nullerror);
    }

    
    
    
    
    
    /*if(args[1] != null && args[2] != null && args[3] != null) {
        var scd = '';
        if (args[4] != null) scd = args[4];
        if(!isNaN(args[2]) && Number(args[2]) >= 0) {
            if(!isNaN(args[1]) && Number(args[1]) >= 0) {
                if(args[1] <= 333) {
                    let level = args[1];
                    let dungeon = [args[3], scd];
                    const dname = dungeon.join('');
                    let levelcalc = Math.round(84*Math.pow(1.13,(level-1)));
                    let currentxp = args[2];
                    let xpleft = levelcalc - currentxp;
                    if (currentxp <= levelcalc) {
                        if (dname == 'dt' || dname == 'deserttemple') bot.commands.get('dtrun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'wo' || dname == 'winteroutpost') bot.commands.get('worun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'pi' || dname == 'pirateisland') bot.commands.get('pirun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'kc' || dname == 'kingscastle') bot.commands.get('kcrun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'tu' || dname == 'theunderworld') bot.commands.get('turun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'sp' || dname == 'samuraipalace') bot.commands.get('sprun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'tc' || dname == 'thecanals') bot.commands.get('tcrun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'gh' || dname == 'ghastlyharbor') bot.commands.get('ghrun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'ss' || dname == 'steampunksewers') bot.commands.get('ssrun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'oo' || dname == 'orbitaloutpost') bot.commands.get('oorun').run(message, args, xpleft, level, bot, bot.config);
                        else if (dname == 'br' || dname == 'bossraids') bot.commands.get('brrun').run(message, args, xpleft, level, bot, bot.config);
                        else {
                            const arg3error = new Discord.RichEmbed()
                                .setColor(bot.colors.red_dark)
                                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                                .setDescription(`:x: **Error** :x:\n\n${message.author.username} the **${args[3]}** Dungeon does not exist.\nPlease enter a valid Dungeon!`)
                                .setTimestamp()
                                .setFooter("Dungeon Quest • Error")
                            return message.channel.send(arg3error);
                        };
                    } else {
                        const Errorembed = new Discord.RichEmbed()
                            .setColor(bot.colors.red_dark)
                            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                            .setDescription(`:x: **Error** :x:\n\nYour current xp (${numberWithCommas(currentxp)}) cannot be more than the maximum xp (${numberWithCommas(levelcalc)}) of level ${level}`)
                            .setTimestamp()
                            .setFooter("Dungeon Quest • Error")
                          return message.channel.send(Errorembed);
                    };
                } else {
                    const lvlerror = new Discord.RichEmbed()
                        .setColor(bot.colors.red_dark)
                        .setTitle(':x: **Error** :x:')
                        .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                        .setDescription(`${message.author.username}, your level must be lower than **Level 333**`)
                        .setTimestamp()
                        .setFooter("Dungeon Quest • Error")
                    return message.channel.send(lvlerror);
                };
            } else {
                const arg1error = new Discord.RichEmbed()
                    .setColor(bot.colors.red_dark)
                    .setTitle(':x: **Error** :x:')
                    .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                    .setDescription(`${message.author.username}, your input **${args[1]}** has to be a positive integer\nKindly use an integer`)
                    .setTimestamp()
                    .setFooter("Dungeon Quest • Error")
                return message.channel.send(arg1error);
            };
        } else {
            const arg2error = new Discord.RichEmbed()
                .setColor(bot.colors.red_dark)
                .setTitle(':x: **Error** :x:')
                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                .setDescription(`${message.author.username}, your input **${args[2]}** has to be a positive integer\nKindly use an integer`)
                .setTimestamp()
                .setFooter("Dungeon Quest • Error")
            return message.channel.send(arg2error);
        };
    } else {
        const arg1error = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setTitle(':x: **Error** :x:')
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .addField(`Error Using ${cmds} Command!`,`**Expected usage:**\n-> ${bot.config.prefix}calc runs [Level] [yourXP] [dungeon] `)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(arg1error);
    };*/
};
