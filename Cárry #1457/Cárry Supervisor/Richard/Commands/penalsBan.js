const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports.execute = async(client , message, args) => {
    if (!message.member.roles.cache.has(config.banhammer) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
//////////
let cezaID = Penals.cek(`cezanumarasi.${message.guild.id}`)+1;
let richardinuyesi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let sebep = args.splice(1).join(" ") || false; 

//////////

  if (!richardinuyesi || !sebep) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}ban @Richârd/ID sebep\``).then(x => x.delete({timeout: 10000})); 
  if(message.author.id === richardinuyesi.id) return message.react(emojis.hata);
  if(message.member.roles.highest.position <= richardinuyesi.roles.highest.position) return message.react(emojis.hata);
  if(!richardinuyesi.bannable) return message.react(emojis.hata);

//////////



      let atilanAy = moment(Date.now()).format("MM");
      let saat = parseInt(moment(Date.now()).format("HH"))+3;
      let dakika = moment(Date.now()).format("mm");
      let atilanSaat = `${saat}:${dakika}` 
      let atilanYıl = moment(Date.now()).format("YYYY");
      let atilanGün = moment(Date.now()).format("DD");
      let muteAtılma = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
      message.react(emojis.onay)
      Functions.embedBasari(message.author, message.channel, `${richardinuyesi} kullanıcısı ${sebep} sebebi ile uyarıldı! (\`#${cezaID}\`)`)
    
//////////
let ceza = {  
    mod: message.author.id, 
    sebep: sebep, 
    kisi: richardinuyesi.displayName, 
    id: cezaID, 
    zaman: muteAtılma,
    bitis: "KALICI", 
    komut: "BAN" 
    };
  let soncezaaktif = {
    mod: message.member.displayName, 
    sebep: sebep, 
    id: cezaID,  
    durum: `✔️ [AKTIF]`,
    bitis: "KALICI", 
    komut: "BAN" 
  };
Penals.degerekle(`sicil.${richardinuyesi.id}.${config.server}`, ceza);
Penals.ekle(`sicilsayi.${richardinuyesi.id}.${config.server}`, +1);
Penals.ayarla(`sonceza.${richardinuyesi.id}.${config.server}`, soncezaaktif);
Penals.ekle(`cezanumarasi.${config.server}`, +1);
Functions.cezaEkle(cezaID, richardinuyesi.id, richardinuyesi.displayName, message.member.displayName, message.author.id, "BAN", sebep, "KALICI", muteAtılma, "KALICI", "ban")
message.guild.log(cezaID, message.author, richardinuyesi, sebep, muteAtılma, "KALICI", "ban", "penal-log")
//////////
};

module.exports.config = {
    name: "ban",
    aliases: ["yargı", "yasakla", "uçur", "ucur", "uçuş", "infaz", "ban"],
    usage: "Taslak",
    description: "Taslak Komutu."
};