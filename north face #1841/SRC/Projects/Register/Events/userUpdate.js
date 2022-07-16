const { Discord, MessageEmbed } = require("discord.js");
module.exports = async (oldUser, newUser) => {
  if (oldUser.bot || newUser.bot) return;
  let sunucu = RegisterClient.guilds.cache.get(settings.server);
  let member = sunucu.members.cache.get(newUser.id);
  let embed = new MessageEmbed().setAuthor(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(settings.footer).setColor("GREEN")
  let embed1 = new MessageEmbed().setAuthor(member.user.username, member.user.avatarURL({dynamic: true})).setTimestamp().setFooter(settings.footer).setColor("RED")

  if (newUser.username !== oldUser.username) {
      if (oldUser.username.includes(settings.tag) && !newUser.username.includes(settings.tag)) {
          member.roles.remove(register.family)
          newUser.guild.kanalBul("tag-log").send(embed1.setDescription(`${newUser} isminden \`${settings.tag}\` çıkartarak ailemizden ayrıldı!`))
      } else if (!oldUser.username.includes(settings.tag) && newUser.username.includes(settings.tag)) {
          member.roles.add(register.family)
          newUser.guild.kanalBul("chat").send(`${newUser} tag alarak ailemize katıldı ona sıcak bir **'Merhaba!'** diyelim :) (\`${settings.tag}\`)`)
          newUser.guild.kanalBul("tag-log").send(embed.setDescription(`${newUser} ismine \`${settings.tag}\` alarak ailemize katıldı`))
      }
  }
 if (newUser.discriminator !== oldUser.discriminator) {
      if (oldUser.discriminator == "1841" && newUser.discriminator !== "1841") {
          member.roles.remove(register.family)
          newUser.guild.kanalBul("tag-log").send(embed1.setDescription(`${newUser} etiketinden \`1841\` çıkartarak ailemizden ayrıldı!`))
      } else if (oldUser.discriminator !== "1841" && newUser.discriminator == "1841") {
          member.roles.add(register.family)
          newUser.guild.kanalBul("tag-log").send(embed.setDescription(`${newUser} etiketine \`1841\` alarak ailemize katıldı`))
          newUser.guild.kanalBul("chat").send(`${newUser} tag alarak ailemize katıldı ona sıcak bir **'Merhaba!'** diyelim :) (\`#1841\`)`)
      }
  }
}; 
  module.exports.registerconfig = {
      name: "userUpdate"
    }