const { Discord, MessageEmbed } = require("discord.js");
module.exports = async (oldUser, newUser) => {/*
  if (oldUser.bot || newUser.bot) return;
  let sunucu = RegisterClient.guilds.cache.get(config.server);
  let member = sunucu.members.cache.get(newUser.id);
  let embed = new MessageEmbed().setAuthor(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("GREEN")
  let embed1 = new MessageEmbed().setAuthor(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("RED")

  if (!oldUser.username.includes(config.nametag) && newUser.username.includes(config.nametag)) {
      if (member.manageable) {
              member.roles.add(registerConfig.family);
              member.guild.kanalBul("tag-log").rsend(embed.setDescription(`${member} adlı üye tagımızı aldığı için kendisine ekip rolü verildi.`)) }
  };
  if (oldUser.username.includes(config.nametag) && !newUser.username.includes(config.nametag)) {
       if (member.manageable) {
                member.roles.remove(registerConfig.family)
                member.guild.kanalBul("tag-log").rsend(embed1.setDescription(`${member} adlı üye tagımızı bıraktığı için kendisinden ekip rolü alındı.`)) 
              }
       }*/
}; 
  module.exports.configuration = {
      name: "userUpdate"
    }