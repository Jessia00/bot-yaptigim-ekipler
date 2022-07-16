const { Discord, MessageEmbed } = require("discord.js");
const richard = require("quick.db");
module.exports.execute = async(ModerationClient , message, args) => {/*
    let user = message.member;
    let channel = user.voice.channel;
    let kanal = richard.get(`private.${channel.id}.owner`);
    if(!message.member.voice.channel) return message.react(emojis.hata);
    if(!kanal) { moderationFunctions.embedHata(message.author, message.channel, "Bu oda daha önce hiç sahiplenilmemiş, otomatik olarak odanın sahibi oldun");
    richard.set(`private.${channel.id}.owner`, message.author.id); } 
    let uye = ModerationClient.guilds.cache.get(config.server).members.cache.get(kanal);
    if(uye.voice.channel != message.member.voice.channel) return moderationFunctions.embedHata(message.author, message.channel, "Görünüşe göre oda sahibi odada değil, "+ config.prefix +"priv claim yazarak kanalın yeni sahibi olabilirsin") 
    if(uye != message.author.id) return moderationFunctions.embedHata(message.author, message.channel, "Kanalın sahibi sen olmadığın için herhangi bir işlem uygulayamazsın!").sil(5)
    if(args[1] == "claim"){
        if(uye.voice.channel == message.member.voice.channel) { moderationFunctions.embedHata(message.author, message.channel, "Oda sahibi zaten odada bulunuyor") }
        else {  richard.set(`private.${channel.id}.owner`, message.author.id); }
    }
    if(args[1] == "limit") { 
    
    let limit = args[2];
    
    if(limit > 50) return moderationFunctions.embedHata(message.author, message.channel, "Private odaların limit en fazla 50 olmalıdır!")
    user.voice.channel.setLimit(limit)
    
    message.react(emojis.onay)
    }
*/};

module.exports.config = {
    name: "private",
    aliases: ["private", "priv", "voice"],
    usage: "Taslak",
    description: "Taslak Komutu."
};