const { MessageEmbed } = require('discord.js');
const qdb = require("quick.db");
const puan = new qdb.table("puanayarlama");
const pdb = new qdb.table("puanlar")
const islemler = new qdb.table("puanislemler");
const moment = require("moment");

module.exports.execute = async (StatClient, message, args) => {

    let embed = new MessageEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true, size: 2048}))
          .setColor("RANDOM")
          .setFooter(config.footer);
    if (!message.member.roles.cache.get(moderationConfig.commander)) return message.react(emojis.hata);

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
     
    let permlerim;
    let sonrakiperm;
    let ondansonrakiperm;
    let permpuanlarim;
    let sorumlulukrolu;

    if (member.roles.cache.has(statConfig.yetki1)) 
            {
              permlerim = statConfig.yetki1
              sonrakiperm = statConfig.yetki2
              ondansonrakiperm = statConfig.yetki3
              permpuanlarim = client.rankPoint.puan1      
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                         }

    if (member.roles.cache.has(statConfig.yetki2)) 
            {
              permlerim = statConfig.yetki2
              sonrakiperm = statConfig.yetki3
              ondansonrakiperm = statConfig.yetki4
              permpuanlarim = client.rankPoint.puan2        
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                                
                                         }

    if (member.roles.cache.has(statConfig.yetki3)) 
            {
              permlerim = statConfig.yetki3
              sonrakiperm = statConfig.yetki4
              ondansonrakiperm = statConfig.yetki5
              permpuanlarim = client.rankPoint.puan3         
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                               
                                         }

    if (member.roles.cache.has(statConfig.yetki4)) 
            {
              permlerim = statConfig.yetki4
              sonrakiperm = statConfig.yetki5
              ondansonrakiperm = statConfig.yetki6
              permpuanlarim = client.rankPoint.puan4         
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                               
                                         }

    if (member.roles.cache.has(statConfig.yetki5)) 
            {
              permlerim = statConfig.yetki5
              sonrakiperm = statConfig.yetki6
              ondansonrakiperm = statConfig.yetki7
              permpuanlarim = client.rankPoint.puan5        
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                                
                                         }

    if (member.roles.cache.has(statConfig.yetki6)) 
            {
              permlerim = statConfig.yetki6
              sonrakiperm = statConfig.yetki7
              ondansonrakiperm = statConfig.yetki8
              permpuanlarim = client.rankPoint.puan6              
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                          
                                         }

    if (member.roles.cache.has(statConfig.yetki7)) 
            {
              permlerim = statConfig.yetki7
              sonrakiperm = statConfig.yetki8
              ondansonrakiperm = statConfig.yetki9
              permpuanlarim = client.rankPoint.puan7               
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                         
                                         }

    if (member.roles.cache.has(statConfig.yetki8)) 
            {
              permlerim = statConfig.yetki8
              sonrakiperm = statConfig.yetki9
              ondansonrakiperm = statConfig.yetki10
              permpuanlarim = client.rankPoint.puan8               
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                         
                                         }

    if (member.roles.cache.has(statConfig.yetki9)) 
            {
              permlerim = statConfig.yetki9
              sonrakiperm = statConfig.yetki10
              ondansonrakiperm = statConfig.yetki11
              permpuanlarim = client.rankPoint.puan9               
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                         
                                         }

    if (member.roles.cache.has(statConfig.yetki10)) 
            {
              permlerim = statConfig.yetki10
              sonrakiperm = statConfig.yetki11
              ondansonrakiperm = statConfig.yetki12
              permpuanlarim = client.rankPoint.puan10      
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                         
                                         }

    if (member.roles.cache.has(statConfig.yetki11)) 
            {
              permlerim = statConfig.yetki11
              sonrakiperm = statConfig.yetki12
              ondansonrakiperm = statConfig.yetki13
              permpuanlarim = client.rankPoint.puan11      
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                         
                                         }

    if (member.roles.cache.has(statConfig.yetki12)) 
            {
              permlerim = statConfig.yetki12
              sonrakiperm = statConfig.yetki13
              ondansonrakiperm = statConfig.yetki13
              permpuanlarim = client.rankPoint.puan12      
              islemler.set(`permim.${member}.yetki`, permlerim);
              islemler.set(`sonrakipermim.${member}.yetki`, sonrakiperm);
              islemler.set(`onsonrakipermim.${member}.yetki`, ondansonrakiperm);
              islemler.set(`permpuanlarim.${member}.yetki`, permpuanlarim);
                                         
                                         }

    if (member.roles.cache.has(statConfig.yetki13)) 
            {
 message.channel.ssend(embed.setDescription(`Sunucumuza verdiği emekler ile son yetkiye ulaşmış tebrikler. :clap:`));                                         
            } else {




    let puanlar = puan.get(`${member.id}.puanim`);
    let kayitlar = islemler.get(`${member.id}.kayit`);
    let mesajim = islemler.get(`${member.id}.mesajatma`);
    let mesajpuanim = islemler.get(`${member.id}.mesajpuan`);
    let sesim = await islemler.get(`stats.${message.guild.id}.${member.id}`);
    let sespuanim = islemler.get(`${member.id}.sespuan`);
    let tagli = islemler.get(`${member.id}.tagaldirma`);;
    let ekpuani = puan.get(`${message.author.id}.ekpuan`);
    let davetler = islemler.get(`${member.id}.davetyapma`);
    let davetpuanlar = islemler.get(`${member.id}.davetpuan`);
    let gorev = islemler.get(`${member.id}.gorev`);
    let gorevpuanlarr = islemler.get(`${member.id}.gorevpuan`);
    let gorevpuanlarimiz = islemler.get(`${member.id}.gorevpuanlarim`);
    let sorumlulukpuan = pdb.get(`sorumlulukpuan.${member.id}.${config.server}`);
    let sorumlulukadet = pdb.get(`sorumlulukadet.${member.id}.${config.server}`);


    let davetpuanlarim = davetpuanlar || 0;
    let gorevpuanlar = gorevpuanlarr || 0;
    let gorevpuanlarim = gorevpuanlarimiz || 0;
    let davetlerim = davetler || 0;
    let kayitpuanlar = kayitlar * 20;
    let taglar = tagli || 0;
    let mesajlar = mesajim || 0;
    let mesajpuanlarim = mesajpuanim || 0;
    let sesler = sesim || `0`;
    let sespuanlarim = sespuanim || 0;
    let tagpuanlar = taglar * 40;
    let datalar = permpuanlarim || 0;
    let puanlarim = puanlar || 0;
    let gerekenpuan = datalar - puanlarim;
    let ekpuanlar = ekpuani || 0;
    let sorumlulukpuanlar = sorumlulukpuan || 0;
    let sorumlulukadetler = sorumlulukadet || 0;
    let gorevgereklipuan = gorevpuanlar - gorevpuanlarim;
    
if (member.roles.cache.has(statConfig.taglisorumlu)) {
  sorumlulukrolu = `${sorumlulukadetler} Taglı`
} else if (member.roles.cache.has(statConfig.sessorumlu)) {
  sorumlulukrolu = `${sorumlulukadetler} Dakika`
} else if (member.roles.cache.has(statConfig.chatsorumlu)) {
  sorumlulukrolu = `${sorumlulukadetler} Mesaj`
} else if (member.roles.cache.has(statConfig.jailsorumlu)) {
  sorumlulukrolu = `${sorumlulukadetler} Ceza`
} else if (member.roles.cache.has(statConfig.davetsorumlu)) {
  sorumlulukrolu = `${sorumlulukadetler} Davet`
} else if (member.roles.cache.has(statConfig.registersorumlu)) {
  sorumlulukrolu = `${sorumlulukadetler} Kayıt`
} else if (!member.roles.cache.has(statConfig.taglisorumlu)) {
  sorumlulukrolu = "Sorumlu Değil"
} else if (!member.roles.cache.has(statConfig.sessorumlu)) {
  sorumlulukrolu = "Sorumlu Değil"
} else if (!member.roles.cache.has(statConfig.chatsorumlu)) {
  sorumlulukrolu = "Sorumlu Değil"
} else if (!member.roles.cache.has(statConfig.jailsorumlu)) {
  sorumlulukrolu = "Sorumlu Değil"
} else if (!member.roles.cache.has(statConfig.davetsorumlu)) {
  sorumlulukrolu = "Sorumlu Değil"
} else if (!member.roles.cache.has(statConfig.registersorumlu)) {
  sorumlulukrolu = "Sorumlu Değil"
}
          
    message.channel.send(embed.setDescription(`${member} (<@&${permlerim}>) kullanıcısının yetki yükseltim bilgileri Puan/Adet olarak aşağıda belirtilmiştir.
    
${emojis.yildiz} Toplam Puan: \`${puanlarim}\`

${emojis.purpleicon}Davet Puanı:\`${davetpuanlarim}\`**(${davetlerim || 0} Adet)**
${emojis.purpleicon}Taglı Puanı:\`${tagpuanlar || 0}\`**(${taglar || 0} Adet)**
${emojis.purpleicon}Kayıt Puanı:\`${kayitpuanlar || 0}\`**(${kayitlar || 0} Adet)**
${emojis.purpleicon}Mesaj Puanı:\`${mesajpuanlarim}\`**(${mesajlar || 0} Adet)**

${emojis.yellowicon}Bonus Puanı:\`${ekpuanlar || 0}\`**(${sesler} Adet)**
${emojis.orangeicon}Sesli Puanı:\`${sespuanlarim}\`**(${sesler} Dakika)**
${emojis.redicon}Sorumluluk Puanı:\`${sorumlulukpuanlar || 0}\`**(${sorumlulukrolu})**

Şuan <@&${permlerim}> rolündesin, <@&${sonrakiperm}> yetkisine **${gerekenpuan}** Puan'a daha gerekiyor!`));
/*
${progressBar(puanlarim, permpuanlarim, 8)} \`${puanlarim} / ${permpuanlarim}\`

    function progressBar(puanlarim, permpuanlarim, size) {
const progress = Math.round(size * ((puanlarim / permpuanlarim) > 1 ? 1 : (puanlarim / permpuanlarim)));
const emptyProgress = size - progress > 0 ? size - progress : 0;

const progressText = "<a:richarddolukutuorta:801740231824900107>".repeat(progress);
const emptyProgressText = "<:richardboskutuorta:801740232063451156>".repeat(emptyProgress);

return emptyProgress > 0 ? `<a:richardolukutuilk:801740231974977556>${progressText}${emptyProgressText}<:richardboskutuson:801740232197537832>` : `<a:richardolukutuilk:801740231974977556>${progressText}${emptyProgressText}<a:richarddolukutuson:801740231597359104>`;
};

    function doldurmaligorev(gorevpuanlarim, gorevpuanlar, size) {
const progress = Math.round(size * ((gorevpuanlarim / gorevpuanlar) > 1 ? 1 : (gorevpuanlarim / gorevpuanlar)));
const emptyProgress = size - progress > 0 ? size - progress : 0;

const progressText = "<a:richarddolukutuorta:801740231824900107>".repeat(progress);
const emptyProgressText = "<:richardboskutuorta:801740232063451156>".repeat(emptyProgress);

return emptyProgress > 0 ? `<a:richardolukutuilk:801740231974977556>${progressText}${emptyProgressText}<:richardboskutuson:801740232197537832>` : `<a:richardolukutuilk:801740231974977556>${progressText}${emptyProgressText}<a:richarddolukutuson:801740231597359104>`;
};*/
}
}

module.exports.statcfg = {
    name: "yetkilistat",
    aliases: ["yetkilistat", "ystat", "stat", "activity"],
    usage: "yetkili istatistiklerini gösterir",
};