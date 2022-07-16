const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayitsiz @Richârd/ID\``).then(x => x.delete({timeout: 10000}));
    if(message.author.id === member.id) return message.react(emojis.hata);
    if(message.member.roles.highest.position <= member.roles.highest.position) return message.react(emojis.hata);
    if(member.roles.cache.has(config.unregister)) return message.react(emojis.hata);

    Functions.kayitSil(member)
    Functions.embedBasari(message.author, message.channel, `${member.user.tag} kullanıcısı başarıyla kayıtsıza atıldı!`).then(x => x.delete({timeout: 10000}));
};

module.exports.config = {
    name: "unregister",
    aliases: ["unreg", "kayitsiz"],
    usage: "Taslak",
    description: "Taslak Komutu."
};