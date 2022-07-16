const {Discord,MessageEmbed} = require("discord.js");
const ms = require('parse-ms');
const Veritabani = require("richard.db");
const User = new Veritabani("./Richard/Models/User");
const Penals = new Veritabani("./Richard/Models/Penals");
const Classic = new Veritabani("./Richard/Models/Classic");
const Staff = new Veritabani("./Richard/Models/Staff");
const Premium = new Veritabani("./Richard/Models/Premium");
module.exports = async (message) => {

    if(message.author.bot) return;
    if(!message.guild) return;
    let prefix = config.prefix
    if(message.content.includes(prefix+`afk`)) return;
     let time = User.cek(`afktime_${message.member}`);
    let timeObj = ms(Date.now() - time);
     let time2 = User.cek(`afktime_${user}`);
    let timeObj2 = ms(Date.now() - time);
    let sure;
    let sure2;

    if(timeObj.hours) {
 sure = `**${timeObj.hours}** Saat **${timeObj.minutes}** Dakika **${timeObj.seconds}** Saniye`
}
    if(!timeObj.hours) {
 sure = `**${timeObj.minutes}** Dakika **${timeObj.seconds}** Saniye`
}
    if(!timeObj.minutes) {
 sure = `**${timeObj.seconds}** Saniye`
}
    if(timeObj2.hours) {
 sure2 = `**${timeObj.hours}** Saat **${timeObj2.minutes}** Dakika **${timeObj2.seconds}** Saniye`
}
    if(!timeObj2.hours) {
 sure2 = `**${timeObj.minutes}** Dakika **${timeObj2.seconds}** Saniye`
}
    if(!timeObj2.minutes) {
 sure2 = `**${timeObj.seconds}** Saniye`
}

    
    if(User.cek(`${message.author.id}.afk`)) {
        var user = message.mentions.users.first();
      let kullanici = message.guild.members.cache.get(message.author.id);
     if(kullanici.manageable) kullanici.setNickname(kullanici.displayName.replace('[AFK] ', ''))
      const scaryemb  = new MessageEmbed()
        message.channel.send(scaryemb.setDescription(`:tada: Hoşgeldin ${message.author}, artık __AFK__ modunda değilsin!`)).then(a => a.delete({timeout:4000}));
        User.sil(`${message.author.id}.afk.sebep`);
          User.sil(`${message.author.id}.afk`);
      
    
    }
    if(!message.guild || message.author.bot || message.content.toLowerCase().includes(`${config.prefix}afk`)) return;
      if(message.mentions.users.size >= 1){
        let victim = message.mentions.users.first();
        if(User.kontrol(`${victim.id}.afk`)) {
          let data = User.cek(`${victim.id}.afk`);
          const scaryemb  = new MessageEmbed()
        return message.channel.send(scaryemb.setDescription(`:tada: ${victim} adlı üye **AFK** modunda.`)).then(x => x.delete({timeout: 7000}));;
        }
      };
   }; 
  module.exports.config = {
      name: "message"
    }