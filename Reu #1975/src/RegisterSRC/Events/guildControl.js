const Discord = require("discord.js");
module.exports = async () => {
  setInterval(() => {
    checkUnregister();
  }, 10000);

  setInterval(() => {
    checkTagged();
  }, 10000);

  setInterval(() => {
    checkUnTagged();
  }, 20000);
/*
  setInterval(() => {
    bannedTagged();
  }, 20000);

  setInterval(() => {
    unbannedTagged();
  }, 20000);*/
}; 
  module.exports.configuration = {
      name: "ready"
    }

    function checkUnregister() {
      let embed1 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(config.server).name, RegisterClient.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("RANDOM")
    
      if (registerConfig.unregister) RegisterClient.guilds.cache.get(config.server).members.cache.filter(uye => uye.roles.cache.size === 1).array().forEach((uye, index) => uye.roles.add(registerConfig.unregister));
      RegisterClient.guilds.cache.get(config.server).channels.cache.get(registerConfig.controllog).rsend(embed1.setDescription("Sunucu içerisinde rolü bulunmayan herkese kayıtsız rolü verildi!"))
    }
    function checkTagged() {
      if (config.tag) {
        let embed2 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(config.server).name, RegisterClient.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("GREEN")
          RegisterClient.guilds.cache.get(config.server).members.cache.filter(uye => uye.user.username.includes(config.nametag) && uye.user.discriminator.includes(config.hashtag) && (!uye.roles.cache.has(registerConfig.family))).array().forEach((uye, index) => {
            uye.setNickname(uye.displayName.replace(config.untag, config.tag));
            if (registerConfig.family) uye.roles.add(registerConfig.family)
          });
          RegisterClient.guilds.cache.get(config.server).channels.cache.get(registerConfig.controllog).rsend(embed2.setDescription("Tagımızı taşıyıp rolü olmayan herkese rolü verildi!"))
          }
    }
    function checkUnTagged() {
      if (config.tag) {
        let embed3 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(config.server).name, RegisterClient.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("RED")
          RegisterClient.guilds.cache.get(config.server).members.cache.filter(uye => !uye.user.username.includes(config.nametag) && !uye.user.discriminator.includes(config.hashtag) && (!uye.roles.cache.has(registerConfig.family))).array().forEach((uye, index) => {
            if (registerConfig.family) uye.roles.remove(registerConfig.family)
          });
            RegisterClient.guilds.cache.get(config.server).channels.cache.get(registerConfig.controllog).rsend(embed3.setDescription("Tagımızı taşımayan herkesten rol başarıyla alındı!"))
          }
    }
    function bannedTagged() {
      if (config.bannedtag) {
        let embed3 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(config.server).name, RegisterClient.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("RED")
          RegisterClient.guilds.cache.get(config.server).members.cache.filter(uye => uye.user.username.includes(config.bannedtag) && uye.user.discriminator.includes(config.bannedtag) && (uye.roles.cache.has(registerConfig.family)) && (uye.roles.cache.has(registerConfig.erkek1)) && (uye.roles.cache.has(registerConfig.kadin1)) && (uye.roles.cache.has(registerConfig.vip)) && (uye.roles.cache.has(registerConfig.booster))&& (uye.roles.cache.has(registerConfig.family)) && (uye.roles.cache.has(registerConfig.erkek1)) && (uye.roles.cache.has(registerConfig.kadin1)) && (uye.roles.cache.has(registerConfig.vip)) && (uye.roles.cache.has(registerConfig.booster))).array().forEach((uye, index) => {
            if (moderationConfig.bannedtag) {
              let rol = uye.roles.cache.filter(a => a.id !== uye.guild.id && a.id !== registerConfig.unregister && a.id !== registerConfig.booster).map(a => a.id)
              uye.roles.remove(rol)
              uye.roles.add(moderationConfig.bannedtag)}
          });
            RegisterClient.guilds.cache.get(config.server).channels.cache.get(registerConfig.controllog).rsend(embed3.setDescription("Yasaklanmış tagı taşıyan herkese yasaklı tag rolü verildi!"))
          }
    }
    function unbannedTagged() {
      if (config.bannedtag) {
        let embed3 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(config.server).name, RegisterClient.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("RED")
        RegisterClient.guilds.cache.get(config.server).members.cache.filter(uye => !uye.user.username.includes(config.bannedtag) && !uye.user.discriminator.includes(config.bannedtag) && (!uye.roles.cache.has(registerConfig.family)) && (!uye.roles.cache.has(registerConfig.erkek1)) && (!uye.roles.cache.has(registerConfig.kadin1)) && (!uye.roles.cache.has(registerConfig.vip)) && (!uye.roles.cache.has(registerConfig.booster)) && (uye.roles.cache.has(registerConfig.family)) && (uye.roles.cache.has(registerConfig.erkek1)) && (uye.roles.cache.has(registerConfig.kadin1)) && (uye.roles.cache.has(registerConfig.vip)) && (uye.roles.cache.has(registerConfig.booster))).array().forEach((uye, index) => {
            if (moderationConfig.bannedtag) {
              let rol = uye.roles.cache.filter(a => a.id !== uye.guild.id && a.id !== registerConfig.unregister && a.id !== registerConfig.booster).map(a => a.id)
                    uye.roles.remove(rol)
            uye.roles.add(registerConfig.unregister)
            }
          });
            RegisterClient.guilds.cache.get(config.server).channels.cache.get(registerConfig.controllog).rsend(embed3.setDescription("Yasaklanmış tagı bırakan herkese kayıtsız rolü verildi!"))
          }
    }