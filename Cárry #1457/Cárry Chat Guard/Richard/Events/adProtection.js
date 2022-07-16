const Discord = require("discord.js");
const db = require("quick.db")
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
let sahtezaman = "60m"
message.member.roles.add(config.muted)
await dataBase.embedHata(message.author, message.channel, `${message.member}** Link paylaşımı yasak olmasına rağmen 5 kere link paylaştığı için 60 Dakika susturuldu!**`).then(x => x.delete({timeout: 10000}));
setTimeout(() => {
message.member.roles.remove(config.muted)
}, ms(sahtezaman))

}
    message.delete().then(async() => {
      await db.add(`reklam_${message.author.id}`, 1)
      await dataBase.embedHata(message.author, message.channel, `${message.member}** Link paylaşımı yasaktır!**`).then(x => x.delete({timeout: 10000}));
  })
}
}; 
  module.exports.configuration = {
      name: "message"
    }