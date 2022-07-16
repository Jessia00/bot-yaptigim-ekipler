const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = async (member) => {

let memberDay = (Date.now() - member.user.createdTimestamp);
var toplamüye = member.guild.memberCount;
let embed = new Discord.MessageEmbed().setFooter(config.footer).setColor('RANDOM');  
let createAt = moment.duration(memberDay).format("Y [Yıl], M [Ay], W [Hafta], DD [Gün]").replace(", 0 Hafta,","").replace("0 Yıl,","").replace(", 0 Ay,","").replace(", 0 Gün","").replace(", 00 Hafta,","").replace(" 00 Yıl,","").replace(", 00 Ay,","").replace(", 00 Gün","").replace(" 01 Gün"," 1 Gün").replace(" 02 Gün"," 2 Gün").replace(" 03 Gün"," 3 Gün").replace(" 04 Gün"," 4 Gün").replace(" 05 Gün"," 5 Gün").replace(" 06 Gün"," 6 Gün").replace(" 07 Gün"," 7 Gün").replace(" 08 Gün"," 8 Gün").replace(" 09 Gün"," 9 Gün");
let createAt2 = moment.duration(memberDay).format("DD [Gün], HH [saat], mm [dakika]").replace(" 0 Gün,","").replace("0 Saat,","").replace(" 0 Dakika,","").replace(" 01 Gün"," 1 Gün").replace(" 02 Gün"," 2 Gün").replace(" 03 Gün"," 3 Gün").replace(" 04 Gün"," 4 Gün").replace(" 05 Gün"," 5 Gün").replace(" 06 Gün"," 6 Gün").replace(" 07 Gün"," 7 Gün").replace(" 08 Gün"," 8 Gün").replace(" 09 Gün"," 9 Gün");
let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
if (guvenilirlik) { member.roles.add(config.karantina)
  member.guild.kanalBul("şüpheli-log").send(embed.setDescription(`${member} isimli kişi sunucuya katıldı fakat hesabı ${Functions.tarihHesapla(member.user.createAt2)} açıldığı için şüpheli olarak işaretlendi.`));
  } else {
    member.guild.channels.cache.get(config.welcome).send(`🎉 ${member.guild.name}'a hoşgeldin ${member}! Hesabın \`${createAt} önce\` açılmış [${emojis.onay}] <@&${config.register}>

Sunucu kurallarımız \`#kurallar\` kanalında belirtilmiştir. Cezaların kuralları okuduğun varsayılarak işlenecektir.

Seninle birlikte **${toplamüye}** üyeye ulaştık, tagımızı alarak **(Cárry, #1457)** kayıt olabilisin. 🎉`)
      member.roles.add(config.unregister)
  member.setNickname(`${config.tag} İsim | Yaş?`)   
  }

}; 
  module.exports.config = {
      name: "guildMemberAdd"
    }