const Discord = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {

    if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return registerFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayit @Richârd/ID <İsim> <Yaş>\``).then(x => x.delete({timeout: 10000}));
    let yazilacakisim;
    let isim = args[1];
    let yaş = Number(args[2]);
    if (yaş < registerConfig.minAge) return registerFunctions.embedHata(message.author, message.channel, answer.yetersizyaş).then(x => x.delete({timeout: 5000}));
    if (!Number(args[2])) return registerFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}isim <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
    if (!member || !isim) return registerFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}isim <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
       yazilacakisim = `${member.user.username.includes(config.tag) ? config.tag : (config.untag ? config.untag : (config.tag || ""))} ${isim} | ${yaş}`;

       member.setNickname(`${yazilacakisim}`).catch();
       let embed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(config.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
       .setDescription(`${member} kişisinin ismi \`${isim} | ${yaş}\` olarak değiştirildi!`)
       message.channel.rsend(embed).then(x => x.delete({timeout: 5000}));
            message.react(emojis.onay)
    registerFunctions.kayitEt(member, message.author, "isim", isim, yaş)


  };

module.exports.configuration = {
    name: "isim",
    aliases: ["i", "name", "n"],
    usage: "Taslak",
    description: "Taslak Komutu."
};