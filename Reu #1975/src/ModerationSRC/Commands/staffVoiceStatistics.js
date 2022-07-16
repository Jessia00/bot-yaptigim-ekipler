const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {
let emb = new MessageEmbed().setFooter(config.footer).setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })).setColor('RANDOM');  
if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata)

let sestag = message.guild.members.cache.filter(uye => uye.user.username.includes(config.nametag) && uye.user.discriminator.includes(config.hashtag) && s.voice.channel).size
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
 let ses = 0;
 for (const [id, voiceChannel] of voiceChannels) ses += voiceChannel.members.size;
 let botlar = message.guild.members.cache.filter(s => s.user.bot && s.voice.channel).size;
let yetkili = message.guild.members.cache.filter(a => a.roles.cache.has(moderationConfig.commander) && a.voice.channel).size;

moderationFunctions.embedOlustur(message.author, message.channel, `Sesli kanallarda toplamda **${sesli}** (**${sestag}**) üye bulunuyor!
Sesli kanallarda **${yetkili}** yetkili bulunuyor!
Sesli kanallarda **${botlar}** bot bulunuyor!`, "RANDOM")
  };

module.exports.config = {
    name: "sesli",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};