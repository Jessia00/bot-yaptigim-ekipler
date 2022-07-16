const Discord = require("discord.js");
const { MessageButton } = require('discord-buttons');
module.exports.execute = async(client, message, args) => {

    if (!message.member.roles.cache.has(config.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayit @Richârd/ID <İsim> <Yaş>\``).then(x => x.delete({timeout: 10000}));
    let yazilacakisim;
    let isim = args[1];
    let yaş = Number(args[2]);
    if(message.author.id === member.id) return message.react(emojis.hata);
    if(message.member.roles.highest.position <= member.roles.highest.position) return message.react(emojis.hata);
    if(!member.roles.cache.has(config.unregister)) return message.react(emojis.hata);
    if (yaş < config.minAge) return Functions.embedHata(message.author, message.channel, answer.yetersizyaş).then(x => x.delete({timeout: 5000}));
    if(!member.user.username.includes(config.nametag) && !member.user.discriminator.includes(config.hashtag) && !member.roles.cache.has(config.vip) && !member.roles.cache.has(config.booster)) return message.react(emojis.hata);    if (!Number(args[2])) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayıt <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
    if (!member || !isim) return Functions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayıt <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
    yazilacakisim = `${member.user.username.includes(config.tag) ? config.tag : (config.untag ? config.untag : (config.tag || ""))} ${isim} | ${yaş}`;

       member.setNickname(`${yazilacakisim}`).catch();
       let embed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(config.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
       .setDescription(`${member} kişisinin ismi \`${isim} | ${yaş}\` olarak değiştirildi!`);
       let qwe = await message.channel.send(embed)
       await qwe.react(emojis.erkek) //erkek emojisi
       await qwe.react(emojis.kadin) //kız emojisi
       let collector = qwe.createReactionCollector((reaction, user) => user.id === message.author.id);
       collector.on("collect", async(reaction, user) => {
           await qwe.reactions.removeAll()
           if (reaction.emoji.id == emojis.erkekemoji) {
            qwe.delete()
            Functions.kayitEt(member, message.author, "erkek", isim, yaş)
            message.react(emojis.onay)
            message.guild.channels.cache.get(config.chat).send(`:tada: ${member} kullanıcı sunucumuza kayıt olarak aramıza katıldı!`)
          }

           if (reaction.emoji.id == emojis.kadinemoji) { //kız
            qwe.delete()
            Functions.kayitEt(member, message.author, "kadin", isim, yaş)
            message.react(emojis.onay)
            message.guild.channels.cache.get(config.chat).send(`:tada: ${member} kullanıcı sunucumuza kayıt olarak aramıza katıldı!`)
           }
       })
  };

module.exports.config = {
    name: "kayit",
    aliases: ["kayıt", "kız", "bay", "bayan", "k", "kadın", "kiz", "kadin", "erkek", "e"],
    usage: "Taslak",
    description: "Taslak Komutu."
};