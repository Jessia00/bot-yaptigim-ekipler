const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports.execute = async(client , message, args) => {
    if (!message.member.roles.cache.has(config.voicemute) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
//////////
let cezaID = Penals.cek(`cezanumarasi.${message.guild.id}`)+1;
let richardinuyesi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let sebep = args.splice(1).join(" ") || false; 

//////////

  if (!richardinuyesi || !sebep || !zaman) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}unvoicemute @Richârd/ID (1s/1m/1h/1d) sebep\``).then(x => x.delete({timeout: 10000}));
  if(message.author.id === richardinuyesi.id) return message.react(emojis.hata);
  if(message.member.roles.highest.position <= richardinuyesi.roles.highest.position) return message.react(emojis.hata);
  if(!richardinuyesi.bannable) return message.react(emojis.hata);

//////////



      message.react(emojis.onay)
      Functions.embedBasari(message.author, message.channel, `${richardinuyesi} kullanıcısı sesli kanallardaki susturulması açıldı`)
    
//////////
richardinuyesi.roles.remove(config.voicemuted)
richardinuyesi.voice.setMute(false)
//////////

};

module.exports.config = {
    name: "unvoicemute",
    aliases: ["vunmute", "unvmute", "uvm"],
    usage: "Taslak",
    description: "Taslak Komutu."
};