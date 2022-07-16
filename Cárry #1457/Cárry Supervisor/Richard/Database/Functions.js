const {Guild, Discord, MessageEmbed} = require('discord.js');
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");

class Functions {
////////////// EMBED KATEGORİSİ //////////////
static botEmbed(kanal, aciklama, color) {
  return kanal.send(new MessageEmbed()
.setDescription(aciklama)
.setColor(color)
.setFooter(config.footer));

}   
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


////////////// CEZA KATEGORİSİ //////////////
static cezaEkle(cezanumarasi, uye, uyename, yetkili, yetkiliid, tur, sebep, sure, as, bz, veritipi) {
  let server = config.server;
  let cezalar = {  mod: yetkili, 
  sebep: sebep, 
  uye: uye,
  kisi: uyename, 
  id: cezanumarasi, 
  durum: `✔️ [AKTIF]`,
  zaman: as,
  bitis: bz, 
  komut: tur 
  };
    Penals.ayarla(`cezalar.${cezanumarasi}.${server}`, cezalar);

    if(veritipi === "chatmute") {
Penals.ekle(`cezapuan.${uye.id}.${server}`, 10);
Penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = Penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.server).puanlog(yetkiliid, uye, puan, "chatmute", "puan-log")
    } else if(veritipi === "voicemute") {
Penals.ekle(`cezapuan.${uye.id}.${server}`, 10);
Penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = Penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.server).puanlog(yetkiliid, uye, puan, "voicemute", "puan-log")
    } else if(veritipi === "jail") {
Penals.ekle(`cezapuan.${uye.id}.${server}`, 20);
Penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = Penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.server).puanlog(yetkiliid, uye, puan, "jail", "puan-log")
    } else if(veritipi === "ban") {
Penals.ekle(`cezapuan.${uye.id}.${server}`, 60);
Penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = Penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.server).puanlog(yetkiliid, uye, puan, "ban", "puan-log")
    } else if(veritipi === "warn") {
Penals.ekle(`cezapuan.${uye.id}.${server}`, 5);
Penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = Penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.server).puanlog(yetkiliid, uye, puan, "warn", "puan-log")
    } 
}
////////////// CEZA KATEGORİSİ //////////////


////////////// KAYIT KATEGORİSİ //////////////
static erkekTeyitgetir(uye) {
    let teyit = Staff.cek(`reg.${uye.id}.erkek`)
    return teyit;
}
static kadinTeyitgetir(uye) {
  let teyit =  Staff.cek(`reg.${uye.id}.kadin`)
  return teyit;
}
static kayitSil(uye) {
let rol = uye.roles.cache.filter(a => a.id !== uye.guild.id && a.id !== config.unregister && a.id !== config.booster).map(a => a.id)
uye.roles.remove(rol)
uye.roles.add(config.unregister)
uye.setNickname(`${config.untag} İsim | Yaş?`).catch();

}   
static kayitEt(uye, yetkili, cinsiyet, isim, yas) {
if(cinsiyet === "erkek") {
  uye.roles.remove(config.unregister)
  uye.roles.remove(config.unregister)
 
  uye.roles.add(config.erkek1)
  uye.roles.add(config.erkek1)
          if (uye.user.username.includes(config.tag) && !uye.roles.cache.has(config.family)) {
            uye.roles.add(config.family);
            uye.roles.add(config.family);
          } 
                        User.ayarla(`kullanici.${uye.id}.cinsiyet`, "erkek")
          Staff.ekle(`reg.${yetkili.id}.erkek`, 1);
          User.degerekle(`isimler.${uye.id}`, {
              guildName: `${isim} | ${yas}`,
              Name: isim,
              Yetkili: yetkili.id,
              Komut: config.erkek1
          });
          User.ekle(`isimmiktar.${uye.id}`, 1);
          User.ayarla(`sonisim.${uye.id}`, isim);
          User.ayarla(`sonyas.${uye.id}`, yas);
} else if(cinsiyet === "kadin") {
  uye.roles.remove(config.unregister)
  uye.roles.remove(config.unregister)
  
  uye.roles.add(config.kadin1)    
  uye.roles.add(config.kadin1)    
  if (uye.user.username.includes(config.tag) && !uye.roles.cache.has(config.family)) {
    uye.roles.add(config.family);
    uye.roles.add(config.family);
  } 
                User.ayarla(`kullanici.${uye.id}.cinsiyet`, "kadin")
  Staff.ekle(`reg.${yetkili.id}.kadin`, 1);
  User.degerekle(`isimler.${uye.id}`, {
      guildName: `${isim} | ${yas}`,
      Name: isim,
      Yetkili: yetkili.id,
      Komut: config.kadin1
  });
  User.ekle(`isimmiktar.${uye.id}`, 1);
  User.ayarla(`sonisim.${uye.id}`, isim);
  User.ayarla(`sonyas.${uye.id}`, yas);
} else if(cinsiyet === "isim") {
  let durum;

  if (uye.roles.cache.has(config.erkek1) && !uye.roles.cache.has(config.kadin1)) durum = config.erkek1;
 
  if (uye.roles.cache.has(config.kadin1) && !uye.roles.cache.has(config.erkek1)) durum = config.kadin1;
 
  if (!uye.roles.cache.has(config.erkek1) && !uye.roles.cache.has(config.kadin1)) durum = config.unregister;
 
  User.degerekle(`isimler.${uye.id}`, {
      guildName: `${isim} | ${yas}`,
      Name: isim,
      Yetkili: yetkili.id,
      Komut: durum
  });
  User.ekle(`isimmiktar.${uye.id}`, 1);
  User.ayarla(`sonisim.${uye.id}`, isim);
  User.ayarla(`sonyas.${uye.id}`, yas);

}
}   
////////////// KAYIT KATEGORİSİ //////////////



static tarihHesapla(date) {
      const startedAt = Date.parse(date);
      var msecs = Math.abs(new Date() - startedAt);
    
      const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
      msecs -= years * 1000 * 60 * 60 * 24 * 365;
      const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
      msecs -= months * 1000 * 60 * 60 * 24 * 30;
      const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
      msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
      const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
      msecs -= days * 1000 * 60 * 60 * 24;
      const hours = Math.floor(msecs / (1000 * 60 * 60));
      msecs -= hours * 1000 * 60 * 60;
      const mins = Math.floor((msecs / (1000 * 60)));
      msecs -= mins * 1000 * 60;
      const secs = Math.floor(msecs / 1000);
      msecs -= secs * 1000;
    
      var string = "";
      if (years > 0) string += `${years} yıl`
      else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
      else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
      else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
      else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
      else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
      else if (secs > 0) string += `${secs} saniye`
      else string += `saniyeler`;
    
      string = string.trim();
      return `\`${string} önce\``;

}
}
module.exports = Functions;
