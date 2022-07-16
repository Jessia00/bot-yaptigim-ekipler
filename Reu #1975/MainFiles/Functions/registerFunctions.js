const {Guild, MessageEmbed} = require('discord.js');
const qdb = require('quick.db');
const kdb = new qdb.table('kullanici');
const teyitler = new qdb.table("teyit");
const isimler = new qdb.table("isimler");
const ms = require('ms');
    class registerFunctions {

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

////////////// KAYIT KATEGORİSİ //////////////
static erkekTeyitgetir(uye) {
      let teyit = teyitler.get(`reg.${uye.id}.erkek`)
      return teyit;
}
static kadinTeyitgetir(uye) {
    let teyit =  teyitler.get(`reg.${uye.id}.kadin`)
    return teyit;
  }
static kayitSil(uye) {
  let rol = uye.roles.cache.filter(a => a.id !== uye.guild.id && a.id !== registerConfig.unregister && a.id !== registerConfig.booster).map(a => a.id)
  uye.roles.remove(rol)
  uye.roles.add(registerConfig.unregister)
  uye.setNickname(`${config.untag} İsim | Yaş?`).catch();

}   
static kayitEt(uye, yetkili, cinsiyet, isim, yas) {
  if(cinsiyet === "erkek") {
    uye.roles.remove(registerConfig.unregister)
    uye.roles.remove(registerConfig.unregister)
   
    uye.roles.add(registerConfig.erkek1)
    uye.roles.add(registerConfig.erkek1)
            if (uye.user.username.includes(config.tag) && !uye.roles.cache.has(registerConfig.family)) {
              uye.roles.add(registerConfig.family);
              uye.roles.add(registerConfig.family);
            } 
                          kdb.set(`kullanici.${uye}.cinsiyet`, "erkek")
            teyitler.add(`reg.${yetkili.id}.erkek`, +1);
            isimler.push(`isimler.${uye.id}`, {
                guildName: `${isim} | ${yas}`,
                Name: isim,
                Yetkili: yetkili.id,
                Komut: registerConfig.erkek1
            });
            isimler.add(`isimmiktar.${uye.id}`, +1);
            isimler.set(`sonisim.${uye.id}`, isim);
            isimler.set(`sonyas.${uye.id}`, yas);
  } else if(cinsiyet === "kadin") {
    uye.roles.remove(registerConfig.unregister)
    uye.roles.remove(registerConfig.unregister)
    
    uye.roles.add(registerConfig.kadin1)    
    uye.roles.add(registerConfig.kadin1)    
    if (uye.user.username.includes(config.tag) && !uye.roles.cache.has(registerConfig.family)) {
      uye.roles.add(registerConfig.family);
      uye.roles.add(registerConfig.family);
    } 
                  kdb.set(`kullanici.${uye}.cinsiyet`, "kadin")
    teyitler.add(`reg.${yetkili.id}.kadin`, +1);
    isimler.push(`isimler.${uye.id}`, {
        guildName: `${isim} | ${yas}`,
        Name: isim,
        Yetkili: yetkili.id,
        Komut: registerConfig.kadin1
    });
    isimler.add(`isimmiktar.${uye.id}`, +1);
    isimler.set(`sonisim.${uye.id}`, isim);
    isimler.set(`sonyas.${uye.id}`, yas);
  } else if(cinsiyet === "isim") {
    let durum;
    if (uye.roles.cache.has(registerConfig.erkek1) && !uye.roles.cache.has(registerConfig.kadin1)) durum = registerConfig.erkek1;
    if (uye.roles.cache.has(registerConfig.kadin1) && !uye.roles.cache.has(registerConfig.erkek1)) durum = registerConfig.kadin1;
    if (!uye.roles.cache.has(registerConfig.erkek1) && !uye.roles.cache.has(registerConfig.kadin1)) durum = registerConfig.unregister;
    isimler.push(`isimler.${uye.id}`, {
        guildName: `${isim} | ${yas}`,
        Name: isim,
        Yetkili: yetkili.id,
        Komut: durum
    });
    isimler.add(`isimmiktar.${uye.id}`, +1);
    isimler.set(`sonisim.${uye.id}`, isim);
    isimler.set(`sonyas.${uye.id}`, yas);

  }
}   
////////////// KAYIT KATEGORİSİ //////////////


}
module.exports = registerFunctions;
