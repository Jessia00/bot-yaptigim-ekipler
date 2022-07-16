const Discord = require("discord.js");
const qdb = require("quick.db");
const puan = new qdb.table("puanayarlama");
const pdb = new qdb.table("puanlar")
const islemler = new qdb.table("puanislemler");
module.exports.execute = async(RegisterClient, message, args) => {

    if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return registerFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayit @Richârd/ID <İsim> <Yaş>\``).then(x => x.delete({timeout: 10000}));
    let yazilacakisim;
    let isim = args[1];
    let yaş = Number(args[2]);
    if (yaş < registerConfig.minAge) return registerFunctions.embedHata(message.author, message.channel, answer.yetersizyaş).then(x => x.delete({timeout: 5000}));
    if(!member.user.username.includes(config.nametag) && !member.user.discriminator.includes(config.hashtag) && !member.roles.cache.has(registerConfig.vip) && !member.roles.cache.has(registerConfig.booster)) return message.react(emojis.hata);    if (!Number(args[2])) return registerFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayıt <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
    if (!member || !isim) return registerFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}kayıt <@Richârd/ID> İsim Yaş\``).then(x => x.delete({timeout: 10000}));
    let collector = message.createReactionCollector((reaction, user) => user.id === message.author.id);
    yazilacakisim = `${member.user.username.includes(config.tag) ? config.tag : (config.untag ? config.untag : (config.tag || ""))} ${isim} | ${yaş}`;

       member.setNickname(`${yazilacakisim}`).catch();
       let embed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(config.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
       .setDescription(`${member} kişisinin ismi \`${isim} | ${yaş}\` olarak değiştirildi!`);
       let qwe = await message.channel.rsend(embed)
       await message.react(emojis.erkek) //erkek emojisi
       await message.react(emojis.kadin) //kız emojisi
       collector.on("collect", async(reaction, user) => {
           await message.reactions.removeAll()
           if (reaction.emoji.id == emojis.erkekemoji) { //erkek
            puan.add(`${message.author.id}.puanim`, +20);
            islemler.add(`${message.author.id}.kayit`, +1);
            qwe.delete()
            registerFunctions.kayitEt(member, message.author, "erkek", isim, yaş)
            message.react(emojis.onay)
            message.guild.channels.cache.get(registerConfig.chat).rsend(`:tada: ${member} kullanıcı sunucumuza kayıt olarak aramıza katıldı!`)
          }

           if (reaction.emoji.id == emojis.kadinemoji) { //kız
            puan.add(`${message.author.id}.puanim`, +20);
            islemler.add(`${message.author.id}.kayit`, +1);
            qwe.delete()
            registerFunctions.kayitEt(member, message.author, "kadin", isim, yaş)
            message.react(emojis.onay)
            message.guild.channels.cache.get(registerConfig.chat).rsend(`:tada: ${member} kullanıcı sunucumuza kayıt olarak aramıza katıldı!`)
           }
       })
  };

module.exports.configuration = {
    name: "kayit",
    aliases: ["kayıt", "kız", "bay", "bayan", "k", "kadın", "kiz", "kadin", "erkek", "e"],
    usage: "Taslak",
    description: "Taslak Komutu."
};