const Discord = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {

    if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return registerfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}kayit @Richârd/ID <İsim>\``).sil(10000);
    let yazilacakisim;
    let isim = args[1];
    if(!member.user.username.includes(settings.tag) && !member.user.discriminator.includes("1841") && !member.roles.cache.has(registerConfig.vip) && !member.roles.cache.has(registerConfig.booster)) return message.react(emojis.hata);
    if (!member || !isim) return registerfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}kayıt <@Richârd/ID> İsim\``).sil(10000);
    if(member === message.member) return registerfx.embedHata(message.author, message.channel, `Kayıt komutlarını kendi üstünde kullanamazsın!`).sil(10000);
    if(!member.bannable) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı yıkılmaz sallanmaz!`).sil(10000);
    if(message.member.roles.highest.position == member.roles.highest.position) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının ile aynı roldesiniz!`).sil(10000);
    if(message.member.roles.highest.position <= member.roles.highest.position) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının rolü senin üstünde!`).sil(10000);

    let collector = message.createReactionCollector((reaction, user) => user.id === message.author.id);
    yazilacakisim = `north face ${isim}`;

       member.setNickname(`${yazilacakisim}`).catch();
       let embed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(settings.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
       .setDescription(`${member} kişisinin ismi \`${isim}\` olarak değiştirildi!`);
       let qwe = await message.channel.send(embed)
       await message.react(emojis.erkek) //erkek emojisi
       await message.react(emojis.kadin) //kız emojisi
       await message.react(emojis.hata)
       collector.on("collect", async(reaction, user) => {
        await message.reactions.removeAll()
           if (reaction.emoji.id == emojis.erkekemoji) { //erkek
            qwe.delete()
            registerfx.kayitEt(member, message.author, "erkek", isim)
            message.react(emojis.onay)
            message.guild.channels.cache.get(registerConfig.chat).send(`:tada: ${member} kullanıcı sunucumuza kayıt olarak aramıza katıldı!`)
          }

          if (reaction.emoji.id == emojis.kadinemoji) { //kız
            qwe.delete()
            registerfx.kayitEt(member, message.author, "kadin", isim)
            message.react(emojis.onay)
            message.guild.channels.cache.get(registerConfig.chat).send(`:tada: ${member} kullanıcı sunucumuza kayıt olarak aramıza katıldı!`)
           }
           
           if (reaction.emoji.id == emojis.hataemoji) { //iptal
            qwe.delete()
            message.delete()
        }
       })

  };

module.exports.registerconfig = {
    name: "kayit",
    aliases: ["kayıt", "kız", "bay", "bayan", "k", "kadın", "kiz", "kadin", "erkek", "e"],
    usage: "Taslak",
    description: "Taslak Komutu."
};