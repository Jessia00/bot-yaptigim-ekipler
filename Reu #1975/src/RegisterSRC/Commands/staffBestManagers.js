const { Discord, MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const teyitler = new qdb.table("teyit");
module.exports.execute = async(RegisterClient, message, args) => {
  
    let embed = new MessageEmbed().setAuthor(`${message.guild.name} Teyit Sıralaması`, message.guild.iconURL({dynamic: true, size: 2048})).setColor("RANDOM").setFooter(config.footer);
  
    let teyit = teyitler.get("reg") || {};

    let database = Object.keys(teyit);

    let toplist = database.filter(x => message.guild.members.cache.has(x)).sort((a, b) => Number((teyit[b].erkek || 0) + (teyit[b].kadin || 0)) - Number((teyit[a].erkek) + (teyit[a].kadin))).map((value, index) => `[**${index+1}.**] ${message.guild.members.cache.get(value)} adlı üyenin toplam **${(teyit[value].erkek || 0) + (teyit[value].kadin || 0)}** (**${teyit[value].erkek || 0}** erkek, **${teyit[value].kadin || 0}** kadın)`).splice(0, 10).join("\n");

    message.channel.send(embed.setDescription(`\n\n ${toplist || 'Sıralama için yeterli veri bulunamadı!'}`));


};

module.exports.configuration = {
    name: "top10",
    aliases: ["topteyit"],
    usage: "Taslak",
    description: "Taslak Komutu."
};