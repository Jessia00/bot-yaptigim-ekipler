const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
    if (!message.member.roles.cache.has(config.register)) return message.react(emojis.hata);
     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

     
    if (!user) return Functions.embedHata(message.author, message.channel, answer.hatalikullanim + ` \`${config.prefix}vip <@Richârd/ID>\``)
    
    
     if(user.manageable) user.roles.add(config.vip)
      message.react(emojis.onay)
      };

module.exports.config = {
    name: "vip",
    aliases: ["ozel"],
    usage: "Taslak",
    description: "Taslak Komutu."
};