const { Discord, MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const isimler = new qdb.table("isimler");
module.exports.execute = async(RegisterClient, message, args) => {
         if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
        let oldnames = isimler.get(`isimler.${member.id}`);
         if (!oldnames) return registerFunctions.embedBasari(message.author, message.channel,"İsim geçmişi temiz.")
    
        let oldsize = isimler.get(`isimmiktar.${member.id}`)
    
      let oldnamelist = oldnames.length > 0 ? oldnames.map((value, index) => ` \`${value.guildName}\` **(<@&${value.Komut}>) [<@${value.Yetkili}>]**`) : "Bu Üyenin İsim Geçmişi Bulunamadı.";
    
      registerFunctions.embedOlustur(message.author, message.channel,`${member} kullanıcının sunucudaki eski isimleri [**${oldsize || 0}**]
    
    ${oldnamelist.join("\n")}`, "RANDOM");
};

module.exports.configuration = {
    name: "oldnames",
    aliases: ["isimler"],
    usage: "Taslak",
    description: "Taslak Komutu."
};