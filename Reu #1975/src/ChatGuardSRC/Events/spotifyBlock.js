const Discord = require("discord.js");
module.exports = async(message) => {
    if(message.channel.id == config.chat){
        if (!message.activity) return;
        if (message.activity.partyID.startsWith("spotify:")) {
        if(message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
            message.delete();   
            await message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.member.displayName).setColor("RANDOM")
            .setDescription(`${message.member}** sohbet kanalına spotify daveti atmak yasaktır!**`)).then(x => x.delete({timeout: 10000}));
        }
    }
}; 
  module.exports.configim = {
      name: "message"
    }