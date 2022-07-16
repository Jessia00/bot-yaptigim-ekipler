const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
const db = require("quick.db")
const cdb = new db.table("cezalar");
module.exports.execute = async(ModerationClient , message, args) => {
    if(!args[0]) return moderationFunctions.embedHata(message.author, message.channel, `Lütfen geçerli bir ceza numarası giriniz.`).sil(5)
    if(Number(args[0]) && args[0].length < 15) {
        let ceza = cdb.get(`cezalar.${args[0]}.${config.server}`);
        if(!ceza){
            return moderationFunctions.embedHata(message.author, message.channel, `\`#${args[0]}\` numaralı ceza bulunamadı.`).sil(5)
        }
        moderationFunctions.embedBasari(message.author, message.channel, `**${message.guild.name}** sunucusunda kayıtlı \`#${args[0]}\` sayılı ceza işlemi <@${ceza.uye}> üzerinde uygulanmıştır ve bilgileri aşşağıda belirtilmiştir.
\`\`\`md
Ceza Durumu => ${ceza.durum}   
Cezalandırılan Üye => ${ceza.kisi}         
Cezalandıran Yetkili => ${ceza.mod}  
Ceza Türü => ${ceza.komut}
Ceza Sebebi => ${ceza.sebep} 
Ceza Başlama tarihi => ${ceza.zaman}
Ceza Bitiş tarihi => ${ceza.bitis}\`\`\``).sil(5)
    }

};

module.exports.config = {
    name: "ceza",
    aliases: ["ceza", "ci", "punishment", "cezainfo", "cezabilgi"],
    usage: "Taslak",
    description: "Taslak Komutu."
};