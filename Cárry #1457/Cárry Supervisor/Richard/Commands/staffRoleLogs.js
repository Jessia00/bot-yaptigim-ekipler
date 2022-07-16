const { Discord, MessageEmbed } = require("discord.js");
const moment = require("moment");
require("moment-timezone");
require("moment-duration-format");
module.exports.execute = async(client , message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
if (!kullanici) return moderationFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}rollog @üye\``).sil(5)
let LOGGGGGGGG = User.cek(`rollogu.${kullanici.id}_qwe`);
if (!LOGGGGGGGG) { Functions.embedBasari(message.author, message.channel, `${kullanici} Kişisinin rol geçmişi temiz.`) 
} else {
let miktar = User.cek(`rolsayi_${kullanici.id}`);
let rollugummmmm = LOGGGGGGGG.length > 0 ? LOGGGGGGGG.map((value, index) => `${value.emoji} Rol ${value.roldurum}. Rol: <@&${value.verilenrol}> Yetkili:<@${value.yetkili}>
Tarih: ${value.tarih}`).join("\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n") : "Bu Üyenin Rol Geçmişi Bulunamadı.";

client.embedGenislet(`${kullanici} kişisinin toplamda ${miktar || `0`} rol bilgisi bulunmakta son ${miktar || `0`} rolün bilgileri aşağıda belirtilmiştir.

${rollugummmmm}`,
                   {name: `${message.member.displayName}`, icon: message.author.avatarURL({dynamic: true})},
                   {name: config.footer, icon: false},                 
                    {setColor: ["RANDOM"]}).then(list => {               
                  list.forEach(item => {
             message.channel.send(item);
})
});
}
  };

module.exports.config = {
    name: "rollog",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};