const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db")
const pdb = new db.table("puanlar")
const cdb = new db.table("cezalar")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports.execute = async(ModerationClient , message, args) => {
    if (!message.member.roles.cache.has(moderationConfig.jailspear) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
//////////
let cezaID = cdb.get(`cezanumarasi.${message.guild.id}`)+1;
let richardinuyesi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let sebep = args.splice(1).join(" ") || false; 

//////////

  if (!richardinuyesi || !sebep) return moderationFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}karantinaal @Richârd/ID sebep\``).sil(5)
 


if(message.member.roles.highest.position <= richardinuyesi.roles.highest.position) {
    return moderationFunctions.embedHata(message.author, message.channel, `Kendinden üst yetkide birini susturamazsın!`).sil(5)
}

//////////

if(!richardinuyesi.bannable) {
    return moderationFunctions.embedHata(message.author, message.channel, `${richardinuyesi} kişisini susturacak yetkim bulunmuyor.`).sil(5)
}

//////////



      let atilanAy = moment(Date.now()).format("MM");
      let saat = parseInt(moment(Date.now()).format("HH"))+3;
      let dakika = moment(Date.now()).format("mm");
      let atilanSaat = `${saat}:${dakika}` 
      let atilanYıl = moment(Date.now()).format("YYYY");
      let atilanGün = moment(Date.now()).format("DD");
      let muteAtılma = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
      message.react(emojis.onay)
      moderationFunctions.embedBasari(message.author, message.channel, `${richardinuyesi} kullanıcısı karantinadan çıkarıldı! (\`#${cezaID}\`)`)
     richardinuyesi.roles.remove(registerConfig.quarantine)
     richardinuyesi.roles.add(registerConfig.unregister)
     
//////////
cdb.add(`cezanumarasi.${config.server}`, +1);
moderationFunctions.cezaEkle(cezaID, richardinuyesi.id, richardinuyesi.displayName, message.member.displayName, message.author.id, "QUARANTINE-REMOVE", sebep, "-", muteAtılma, "-", "jail")
message.guild.unlog(cezaID, message.author, richardinuyesi, sebep, muteAtılma, "-", "jail", "jail-log")
//////////
  };

module.exports.config = {
    name: "karantinaal",
    aliases: ["unkarantina", "uk", "removequarantine", "rq"],
    usage: "Taslak",
    description: "Taslak Komutu."
};