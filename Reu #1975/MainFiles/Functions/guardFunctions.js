const {Guild, MessageEmbed} = require('discord.js');
const qdb = require('quick.db');
const ms = require('ms');
    class GuardFunctions {

static closeall(obj, permes) {
        obj.roles.cache.filter(rol => rol.editable).filter(rol => permes.some(xd => rol.permissions.has(xd))).forEach(async (rol) => rol.setPermissions(0));
}

////////////// EMBED KATEGORİSİ //////////////
static embedOlustur(uye, kanal, aciklama, color) {
    return kanal.send(new MessageEmbed()
.setDescription(aciklama)
.setColor(color)
.setFooter(config.footer)
.setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));

  }   
  static embedBasari(uye, kanal, aciklama) {
   return kanal.send(new MessageEmbed()
   .setDescription(aciklama)
   .setColor("#00ff00")
   .setFooter(config.footer)
   .setAuthor(uye.tag, uye.avatarURL({dynamic: true, size: 2048}))); 
  }
  static embedHata(uye, kanal, aciklama) {
    return kanal.send(new MessageEmbed()
.setDescription(aciklama)
.setColor("#ff0000")
.setFooter(config.footer)
.setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));
  }   
////////////// EMBED KATEGORİSİ //////////////


}
module.exports = GuardFunctions;
