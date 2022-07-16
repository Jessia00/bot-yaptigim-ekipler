const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
         if (!message.member.roles.cache.has(config.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
        let oldnames = User.cek(`isimler.${member.id}`);
         if (!oldnames) return Functions.embedBasari(message.author, message.channel,"İsim geçmişi temiz.")
    
        let oldsize = User.cek(`isimmiktar.${member.id}`)
    
      let oldnamelist = oldnames.length > 0 ? oldnames.map((value, index) => ` \`${value.guildName}\` **(<@&${value.Komut}>) [<@${value.Yetkili}>]**`) : "Bu Üyenin İsim Geçmişi Bulunamadı.";
    
      Functions.embedOlustur(message.author, message.channel,`${member} kullanıcının sunucudaki eski isimleri [**${oldsize || 0}**]
    
    ${oldnamelist.join("\n")}`, "RANDOM");
};

module.exports.config = {
    name: "oldnames",
    aliases: ["isimler"],
    usage: "Taslak",
    description: "Taslak Komutu."
};