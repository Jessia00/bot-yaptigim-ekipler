const { Discord, MessageEmbed } = require("discord.js");
module.exports = async (oldUser, newUser) => {
  if (oldUser.bot || newUser.bot) return;
  let sunucu = RegisterClient.guilds.cache.get(settings.server);
  let member = sunucu.members.cache.get(newUser.id);
  let embed = new MessageEmbed().setAuthor(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(settings.footer).setColor("GREEN")
  let embed1 = new MessageEmbed().setAuthor(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(settings.footer).setColor("RED")

  if (!oldUser.discriminator.includes("1998") && newUser.discriminator.includes("1998")) {
    member.guild.kanalBul("tag-log").send(embed.setDescription(`${member} adlı üye tagımızı aldığı için kendisine <@&${registerConfig.family}> rolü verildi.`)) }
    if (member.manageable) {
              member.roles.add(registerConfig.family);
  };
  if (oldUser.discriminator.includes("1998") && !newUser.discriminator.includes("1998")) {
    if (newUser.user.username.includes(settings.tag)) return
    member.guild.kanalBul("tag-log").send(embed1.setDescription(`${member} adlı üye tagımızı bıraktığı için kendisinden <@&${registerConfig.family}> rolü alındı.`)) 
    if (member.manageable) {
          member.roles.cache.has(registerConfig.booster) ? member.roles.set([registerConfig.booster, registerConfig.unregister]) : member.roles.set([registerConfig.unregister]);
              }
          }
}; 
  module.exports.registerconfig = {
      name: "userUpdate"
    }