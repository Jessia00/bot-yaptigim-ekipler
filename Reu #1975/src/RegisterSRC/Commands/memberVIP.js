const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {
  
    if (!message.member.roles.cache.has(registerConfig.register)) return message.react(emojis.hata);
     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

     
    if (!user) return registerFunctions.embedHata(message.author, message.channel, answer.hatalikullanim + ` \`${config.prefix}vip <@Richârd/ID>\``)
    
    
     if(user.manageable) user.roles.add(registerConfig.vip)
      message.react(emojis.onay)
      };

module.exports.configuration = {
    name: "vip",
    aliases: ["ozel"],
    usage: "Taslak",
    description: "Taslak Komutu."
};