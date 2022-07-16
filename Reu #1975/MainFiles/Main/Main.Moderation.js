const { Discord, MessageEmbed } = require("discord.js");
const fs = require("fs");
const moment = require("moment");
require("moment-duration-format");
const db = require("quick.db");
require("moment-timezone");
const scarydb = new db.table("scaryrollog");
const logs = require('discord-logs');
logs(ModerationClient)

class Mod {
    static appSetup() {
ModerationClient.login(config.moderation).catch(err => console.error("[ Moderation ] Discord API Botun tokenini doğrulayamadı."));
    }
}
module.exports = Mod;
ModerationClient.on('guildMemberRoleAdd', async(member, role) =>  {
let atilanAy = moment(Date.now()).format("MM");
let saat = parseInt(moment(Date.now()).format("HH"))+3;
let dakika = moment(Date.now()).format("mm");
let atilanSaat = `${saat}:${dakika}` 
let atilanYıl = moment(Date.now()).format("YYYY");
let atilanGün = moment(Date.now()).format("DD");
let tarihxd = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;

    const Log = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).then(audit => audit.entries.first());
    if (!Log || !Log.executor || member.guild.roles.cache.get(role.id).position < member.guild.roles.cache.get(moderationConfig.commander).position) return;
    scarydb.add(`rolsayi_${member.id}`, +1)
    scarydb.push(`rollogu.${member.id}`, {
    verilenrol: role.id,
    emoji: emojis.onay,
    roldurum: "verildi",
    yetkili: Log.executor.id,
    tarih: tarihxd
    })
    
})
ModerationClient.on('guildMemberRoleRemove', async(member, role) =>  {
let atilanAy = moment(Date.now()).format("MM");
let saat = parseInt(moment(Date.now()).format("HH"))+3;
let dakika = moment(Date.now()).format("mm");
let atilanSaat = `${saat}:${dakika}` 
let atilanYıl = moment(Date.now()).format("YYYY");
let atilanGün = moment(Date.now()).format("DD");
let tarihxd = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
    
    const Log = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).then(audit => audit.entries.first());
    if (!Log || !Log.executor || member.guild.roles.cache.get(role.id).position < member.guild.roles.cache.get(moderationConfig.commander).position) return;
    scarydb.add(`rolsayi_${member.id}`, +1)
    scarydb.push(`rollogu.${member.id}`, {
    verilenrol: role.id,
    emoji: emojis.hata,
    roldurum: "alındı",
    yetkili: Log.executor.id,
    tarih: tarihxd
    })
})

client.embedGenislet = async function(description, author = false, footer = false, features = false) {
    let embedSize = parseInt(`${description.length/2048}`.split('.')[0])+1
    let embeds = new Array()
    for (var i = 0; i < embedSize; i++) {
      let desc = description.split("").splice(i*2048, (i+1)*2048)
      let x = new MessageEmbed().setDescription(desc.join(""))
      if (i == 0 && author) x.setAuthor(author.name, author.icon ? author.icon : null)
      if (i == embedSize-1 && footer) x.setFooter(footer.name, footer.icon ? footer.icon : null)
      if (i == embedSize-1 && features && features["setTimestamp"]) x.setTimestamp(features["setTimestamp"])
      if (features) {
        let keys = Object.keys(features)
        keys.forEach(key => {
          if (key == "setTimestamp") return
          let value = features[key]
          if (i !== 0 && key == 'setColor') x[key](value[0])
          else if (i == 0) {
            if(value.length == 2) x[key](value[0], value[1])
            else x[key](value[0])
          }
        })
      }
      embeds.push(x)
    }
    return embeds
  };
  