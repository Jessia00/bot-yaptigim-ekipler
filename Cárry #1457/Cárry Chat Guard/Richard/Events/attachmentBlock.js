const Discord = require("discord.js");
module.exports = async(message) => {
    if(message.attachments.size >= 1){
        if(message.channel.id == config.chat){
         if(message.member.premiumSinceTimestamp == 0){
        if(message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
            message.delete();   
            await message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.member.displayName).setColor("RANDOM")
            .setDescription(`${message.member}** sohbet kanalına dosya aktarımı yasaktır!**`)).then(x => x.delete({timeout: 10000}));
         }
        }
       }   }; 
  module.exports.configuration = {
      name: "message"
    }