const Discord = require("discord.js");
module.exports.execute = async(client, message, args) => {

    if (!message.member.roles.cache.has(config.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}isim @Richârd/ID <İsim> <Yaş>\``).then(x => x.delete({timeout: 10000}));
    let yazilacakisim;
    let isim = args[1];
    let yaş = Number(args[2]);
    if(message.author.id === member.id) return message.react(emojis.hata);
    if(message.member.roles.highest.position <= member.roles.highest.position) return message.react(emojis.hata);
    if(!member.roles.cache.has(config.unregister)) return message.react(emojis.hata);
    if (yaş < config.minAge) return Functions.embedHata(message.author, message.channel, answer.yetersizyaş).then(x => x.delete({timeout: 5000}));
    if (!Number(args[2])) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}isim <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
    if (!member || !isim) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}isim <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
       yazilacakisim = `${member.user.username.includes(config.tag) ? config.tag : (config.untag ? config.untag : (config.tag || ""))} ${isim} | ${yaş}`;

       member.setNickname(`${yazilacakisim}`).catch();
       let embed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(config.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
       .setDescription(`${member} kişisinin ismi \`${isim} | ${yaş}\` olarak değiştirildi!`)
       message.channel.send(embed).then(x => x.delete({timeout: 5000}));
            message.react(emojis.onay)
    Functions.kayitEt(member, message.author, "isim", isim, yaş)


  };

module.exports.config = {
    name: "isim",
    aliases: ["i", "name", "n"],
    usage: "Taslak",
    description: "Taslak Komutu."
};