const {Guild, MessageEmbed} = require('discord.js');
const qdb = require('quick.db');
const ms = require('ms');

            class richardDatabase {


////////////// MESAJ KATEGORİSİ //////////////
  static mesaj(kanal, aciklama) {
    return kanal.send(aciklama);
  }   
////////////// MESAJ KATEGORİSİ //////////////

////////////// EMBED KATEGORİSİ //////////////
        static embedOlustur(uye, kanal, aciklama, color) {
          return kanal.send(new MessageEmbed()
    .setDescription(aciklama)
    .setColor(color)
    .setFooter(config.footer)
    .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));

        }   
        static avatarOlustur(uye, kanal, aciklama, color) {
          return kanal.send(new MessageEmbed()
    .setDescription(aciklama)
    .setImage(uye.avatarURL())
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
module.exports = richardDatabase;
