const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, currentlvl, Targetlvl, bot) => {
  if(xpleft>0){
  var finalxpbr = Math.round(xpleft/(dungeonxp.br[0]));    
  var finalxpbrvip = Math.round(xpleft/(dungeonxp.br[1]));
  const brxpcalc = new Discord.RichEmbed()
    .setColor("#daa520")
    .setTitle('Round Calculator')
    .setDescription(`Number of Boss Raid runs required to reach level ${parseInt(Targetlvl)} from level ${currentlvl}`)
    .setThumbnail(`https://vignette.wikia.nocookie.net/dungeonquestroblox/images/4/47/RaidKey.png/revision/latest/zoom-crop/width/240/height/240?cb=20191103123705`)
    .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
    .addField('Boss Raids', `${numberWithCommas(finalxpbr)}`, true)
    .addField('Boss Raids (VIP Pass)', `${numberWithCommas(finalxpbrvip)}`, true)
    .setTimestamp()
    .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
  return message.channel.send(brxpcalc);
}else{
  const error = new Discord.RichEmbed()
                  .setColor(bot.colors.red_dark)
                  .setTitle(':x: **Error** :x:')
                  .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                  .setDescription(`${message.author.username}, Current level is to be less than the Target Level`)
                  .setTimestamp()
                  .setFooter("Dungeon Quest • Error")
              return message.channel.send(error);
}
};
