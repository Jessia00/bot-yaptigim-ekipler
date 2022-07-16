const { Discord, MessageEmbed, } = require("discord.js");
const qdb = require("quick.db");
const puan = new qdb.table("puanayarlama");
const pdb = new qdb.table("puanlar")
const islemler = new qdb.table("puanislemler");

module.exports.execute = async(StatClient, message, args) => {
  
    if(message.author.id === config.owner) {    
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
        let miktar = args[1];
        let miktar2 = args[1];
    
    
        if (!member || !miktar) return statFunctions.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${config.prefix || '.'}point @üye miktar\``).then(x => x.delete({timeout: 10000}));
    
          let yetkili = member.roles.cache.has(moderationConfig.commander);
    
        if (!yetkili) return statFunctions.embedHata(message.author, message.channel, `Kullanıcı yetkili değil puan eklenemez.`).then(x => x.delete({timeout: 10000}));
          
                    puan.add(`${member.id}.ekpuan`, +miktar);
                    puan.add(`${member.id}.puanim`, +miktar2);

        message.channel.ssend(`${member} kişisine **${miktar}** adet puan eklendi.`);    
    }
};

module.exports.statcfg = {
    name: "push",
    aliases: ["push"],
    usage: "Taslak",
    description: "Taslak Komutu."
};