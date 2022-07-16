const { MessageEmbed } = require('discord.js');
const qdb = require("quick.db");
const islemler = new qdb.table("puanislemler");
const puan = new qdb.table("puanayarlama");
const tagaldirma = new qdb.table("tagaldirma");

module.exports.execute = async (StatClient, message, args) => {

   let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("RANDOM")
    if (!message.member.roles.cache.has(moderationConfig.commander) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
 
   if (!member) return message.channel.ssend(embed.setDescription(`Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}tagli @üye\``)).then(x => x.delete({timeout: 10000})); 
   if (tagaldirma.get(`kullanildi.${member.id}`)) return message.channel.ssend(embed.setDescription(`Belirtilen kullanıcı bir yetkili tarafından veritabanına eklenmiş!`)).then(x => x.delete({timeout: 10000}));
   if(!member.user.username.includes(config.nametag) && !member.user.discriminator.includes(config.hashtag)) return message.channel.ssend(embed.setDescription(`${message.author} belirtiğin üye tagımızı kullanmıyor!`))
  
        const msg = await message.channel.ssend(`${member}, ${message.author} isimli yetkilimiz sizi taglı üye olarak seçmek istiyor onay veriyormusunuz?`)
        let collector = msg.createReactionCollector((reaction, user) => user.id === member.id);
        await msg.react(emojis.onayemoji) //onay emojisi
        await msg.react(emojis.hataemoji) //red emojisi
        collector.on("collect", async(reaction, user) => {
            await msg.delete()
            if (reaction.emoji.id == emojis.onayemoji) { 
            puan.add(`${message.author.id}.puanim`, +40);
            islemler.add(`${message.author.id}.tagaldirma`, +1);
            tagaldirma.set(`kullanildi.${member.id}`, true)
            message.react(emojis.onay)
/*        message.channel.ssend(embed.setDescription(`${message.author} isimli yetkilimiz ${member} kullanıcısına başarıyla tag aldırdı`))*/
            }
            if (reaction.emoji.id == emojis.hataemoji) {
            message.react(emojis.hata)
/*        message.channel.ssend(embed.setDescription(`${member}, ${message.author} isimli yetkilimizin tag aldırma istediğini kabul etmedi!`))*/
}
        })
   }

module.exports.statcfg = {
    name: "tagli",
    aliases: ["tagli"],
    usage: "erkek @üye [isim] [yaş]",
    description: "Belirtilen üyeyi sunucuya erkek olarak kaydını gerçekleştirmiş olursunuz."
}