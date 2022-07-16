const Discord = require("discord.js");
const db = require("quick.db")
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports = async (message) => {
  if(!message.guild.id) return;
  if(message.author.bot) return;
let matched = message.content.replace(/[^A-Z]/g, "").length;
let yuzde = percentage(matched, message.content.length)
if (Math.round(yuzde) > 50) {
  if(message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
let miktar = db.get(`caps_${message.author.id}`);
if(miktar >= 5) {
    db.delete(`caps_${message.author.id}`)
let sahtezaman = "10m"
message.member.roles.add(config.muted)
await dataBase.embedHata(message.author, message.channel, `${message.member}** Caps kullanımı yasak olmasına rağmen 5 kere caps kullandığı için 10 Dakika susturuldu!**`).then(x => x.delete({timeout: 10000}));
setTimeout(() => {
message.member.roles.remove(config.muted)
}, ms(sahtezaman))

}
message.delete().then(async() => {
  await db.add(`caps_${message.author.id}`, 1)
  await dataBase.embedHata(message.author, message.channel, `${message.member}** Caps kullanımı yasaktır!**`).then(x => x.delete({timeout: 10000}));
})
}
}; 
  module.exports.configuration = {
      name: "message"
    }

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
} 