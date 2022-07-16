const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return registerFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayitsiz @Richârd/ID\``).then(x => x.delete({timeout: 10000}));

    registerFunctions.kayitSil(member)
    registerFunctions.embedBasari(message.author, message.channel, `${member.user.tag} kullanıcısı başarıyla kayıtsıza atıldı!`).then(x => x.delete({timeout: 10000}));
};

module.exports.configuration = {
    name: "unregister",
    aliases: ["unreg", "kayitsiz"],
    usage: "Taslak",
    description: "Taslak Komutu."
};