const Discord = require("discord.js");
const db = require("quick.db")
const pdb = new db.table("puanlar")
const cdb = new db.table("cezalar")
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports = async (message) => {
    if(!message.guild.id) return;
    if(message.author.bot) return;
    const kelime = ["discord.app", "discord.gg","discordapp","discordgg", ".com", ".gg/", "dc.gg", "gg/", "invite/", "/invite", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"];
    if(kelime.some(a => message.content.includes(a))){
      if(message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
      let miktar = db.get(`reklam_${message.author.id}`);
      if(miktar >= 5) {
          db.delete(`reklam_${message.author.id}`)
let cezaID = cdb.get(`cezanumarasi.${message.guild.id}`)+1;
let sahtezaman = "10m"
let zamanimizlar = sahtezaman.replace("s","second").replace("m","minute").replace("h","hours").replace("d","day")
let zamanimiz = zamanimizlar.replace("second"," saniye").replace("minute"," dakika").replace("hours"," saat").replace("day"," gün")


  let atilanAy = moment(Date.now()).format("MM");
  let saat = parseInt(moment(Date.now()).format("HH"))+3;
  let dakika = moment(Date.now()).format("mm");
  let atilanSaat = `${saat}:${dakika}` 
  let atilanYıl = moment(Date.now()).format("YYYY");
  let atilanGün = moment(Date.now()).format("DD");
  let muteAtılma = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
  let bitişAy = moment(Date.now()+ms(sahtezaman)).format("MM");
  let bitissaat = parseInt(moment(Date.now()+ms(sahtezaman)).format("HH"))+3;
  let bitisdakika = moment(Date.now()+ms(sahtezaman)).format("mm");
  let bitişSaat = `${bitissaat}:${bitisdakika}` 
  let bitişGün = moment(Date.now()+ms(sahtezaman)).format("DD");
  let bitişYıl = moment(Date.now()+ms(sahtezaman)).format("YYYY");
  let muteBitiş = `${bitişGün} ${bitişAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${bitişYıl} ${bitişSaat}`;
      await chatGuardFunctions.embedHata(message.author, message.channel, `${message.member} kişisi sunucumuzda link paylaşımı yasak olduğu halde 5 kere paylaştığı için \`10 dakika\` susturuldu! **[\`#${cezaID}\`]**`).then(x => x.delete({timeout: 10000}));  
//////////
moderationFunctions.botCezaEkle(cezaID, message.author.id, message.member.displayName, "CHAT-MUTE", "Reklam Koruması", muteAtılma, muteBitiş, "chatmute")
message.member.roles.add(moderationConfig.chatmuted)
//////////
setTimeout(() => {
message.member.roles.remove(moderationConfig.chatmuted)
let cezalar = {  mod: "CHATGUARD", 
    sebep: "Reklam Koruması", 
    uye: message.author.id,
    kisi: message.member.displayName, 
    id: cezaID, 
    durum: `❌ [PASIF]`,
    zaman: muteAtılma,
    bitis: muteBitiş,
    komut: "CHAT-MUTE" 
    };
      cdb.set(`cezalar.${cezaID}.${config.server}`, cezalar);
  
cdb.set(`sonceza.${message.author.id}.${message.guild.id}`, { 
mod: "CHATGUARD",
sebep: "Reklam Koruması", 
id: cezaID,  
durum: `❌ [PASIF]`,
bitis: muteBitiş,
komut: "CHAT-MUTE" 
});    
}, ms(sahtezaman))

}
      message.delete().then(async() => {
        await db.add(`reklam_${message.author.id}`, 1)
        await chatGuardFunctions.embedHata(message.author, message.channel, `${message.member}** link paylaşımı yasaktır!**`).then(x => x.delete({timeout: 10000}));
    })
}
}; 
  module.exports.configim = {
      name: "message"
    }