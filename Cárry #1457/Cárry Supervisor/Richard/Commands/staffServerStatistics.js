const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client , message, args) => {


  if (!message.member.roles.cache.has(config.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
  
  let sunucu = message.guild.memberCount;

  let online = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;

  
  let isimtagli = message.guild.members.cache.filter(uye => uye.user.username.includes(config.nametag)).size;
  let etikettagli = message.guild.members.cache.filter(uye => uye.user.discriminator.includes(config.hashtag)).size;
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let ses = 0;
  for (const [id, voiceChannel] of voiceChannels) ses += voiceChannel.members.size;
    let sestag = message.guild.members.cache.filter(uye => uye.user.username.includes(config.nametag) && uye.user.discriminator.includes(config.hashtag) && s.voice.channel).size
    let sestagli2 = sestag;
  let yetkili = message.guild.members.cache.filter(uye => uye.roles.cache.has(config.commander)).size;

  let booster = message.guild.premiumSubscriptionCount;
    
  Functions.embedOlustur(message.author, message.channel, `Sunucumuzda **${sunucu}** (**${online}**) Üye bulunmaktadır.
Sunucumuzda **${isimtagli + etikettagli}** taglı bulunmaktadır.
Sunucumuzda **${isimtagli}** \`${config.nametag}\` taglı bulunmaktadır.
Sunucumuzda **${etikettagli}** \`#${config.hashtag}\` taglı bulunmaktadır.
Sunucumuzda **${yetkili}** Yetkili bulunmaktadır. 
Sunucumuzda **${booster}** Takiye Bulunmaktadır.`, "RANDOM")
  };

module.exports.config = {
    name: "say",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};