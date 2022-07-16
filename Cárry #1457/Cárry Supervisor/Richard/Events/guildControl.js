const Discord = require("discord.js");
module.exports = async () => {
  setInterval(() => {
    checkUnregister();
  }, 60000);
/*
  setInterval(() => {
    checkTagged();
  }, 60000);
  setInterval(() => {
    checkUnTagged();
  }, 40000);*/
}; 
  module.exports.config = {
      name: "ready"
    }

    function checkUnregister() {
      let embed1 = new Discord.MessageEmbed().setAuthor(client.guilds.cache.get(config.server).name, client.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("RANDOM")
    
      if (config.unregister) client.guilds.cache.get(config.server).members.cache.filter(uye => uye.roles.cache.size === 1).array().forEach((uye, index) => {
        if(uye.manageable) { uye.roles.add(config.unregister); 
        uye.setNickname(`${config.untag} İsim | Yaş?`);}
    });
      client.guilds.cache.get(config.server).channels.cache.get(config.controllog).send(embed1.setDescription("Sunucu içerisinde rolü bulunmayan herkese kayıtsız rolü verildi!"))
    }
    function checkTagged() {
      if (config.tag) {
        let embed2 = new Discord.MessageEmbed().setAuthor(client.guilds.cache.get(config.server).name, client.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("GREEN")
          client.guilds.cache.get(config.server).members.cache.filter(uye => uye.user.username.includes(config.nametag) && uye.user.discriminator.includes(config.hashtag) && (!uye.roles.cache.has(config.family)) && !uye.roles.cache.has(config.vip) && !uye.roles.cache.has(config.booster)).array().forEach((uye, index) => {
            if(uye.manageable) uye.roles.add(config.family)
          });
          client.guilds.cache.get(config.server).channels.cache.get(config.controllog).send(embed2.setDescription("Tagımızı taşıyıp rolü olmayan herkese rolü verildi!"))
          }
    }
    function checkUnTagged() {
      if (config.tag) {
        let embed3 = new Discord.MessageEmbed().setAuthor(client.guilds.cache.get(config.server).name, client.guilds.cache.get(config.server).iconURL({dynamic: true})).setTimestamp().setFooter(config.footer).setColor("RED")
          client.guilds.cache.get(config.server).members.cache.filter(uye => !uye.user.username.includes(config.nametag) && !uye.user.discriminator.includes(config.hashtag) && (!uye.roles.cache.has(config.family)) && !uye.roles.cache.has(config.vip) && !uye.roles.cache.has(config.booster)).array().forEach((uye, index) => {
            if(uye.manageable) { uye.setNickname(`${config.untag} İsim | Yaş?`);
            uye.roles.set([config.unregister]) }
          });
            client.guilds.cache.get(config.server).channels.cache.get(config.controllog).send(embed3.setDescription("Tagımızı taşımayan herkesten rol başarıyla alındı!"))
          }
    }