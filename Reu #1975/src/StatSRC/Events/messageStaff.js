const { Message } = require("discord.js");
const qdb = require("quick.db");
const islemler = new qdb.table("puanislemler");
const puan = new qdb.table("puanayarlama");

module.exports = async (message) => {
    let guild = StatClient.guilds.cache.get(config.server);
    if(message.webhookID || message.author.bot || message.channel.type === "dm" || !message.guild || message.content.startsWith(config.prefix)) return;
    if (message.member.roles.cache.has(moderationConfig.commander)) {
            if(message.member.roles.cache.has(statConfig.endPerm)) return;
            let suankiperm = islemler.get(`permim.${message.member}.yetki`);
            let sonrakiperm = islemler.get(`sonrakipermim.${message.member}.yetki`);
            let sonrakininpermi = islemler.get(`onsonrakipermim.${message.member}.yetki`);
            let gerekenpuan = islemler.get(`permpuanlarim.${message.member}.yetki`);
            let puanlar = puan.get(`${message.author.id}.puanim`);
            let puanlarim = puanlar || 0;
      if(puanlarim >= gerekenpuan){ 
            let suankiperm = islemler.get(`permim.${message.member}.yetki`);
            let sonrakiperm = islemler.get(`sonrakipermim.${message.member}.yetki`);
            let sonrakininpermi = islemler.get(`onsonrakipermim.${message.member}.yetki`);
            let gerekenpuan = islemler.get(`permpuanlarim.${message.member}.yetki`);
         message.member.roles.add(sonrakiperm);
         message.member.roles.remove(suankiperm)  
         islemler.set(`onsonrakipermim.${message.member}.yetki`, sonrakininpermi);
            puan.delete(`${message.member.id}.puanim`);
    islemler.delete(`${message.member.id}.kayit`);
    islemler.delete(`${message.member.id}.mesajatma`);
    islemler.delete(`${message.member.id}.mesajpuan`);
    islemler.delete(`${message.member.id}.tagaldirma`);;
    puan.delete(`${message.author.id}.ekpuan`);
    islemler.delete(`${message.member.id}.davetyapma`);
    islemler.delete(`${message.member.id}.davetpuan`);
    islemler.delete(`${message.member.id}.gorev`);
    islemler.delete(`${message.member.id}.gorevpuan`);
    islemler.delete(`${message.member.id}.gorevpuanlarim`);
    islemler.delete(`${message.member.id}.sesdurma`);
    islemler.delete(`${message.member.id}.sespuan`);
              let stafflog = message.guild.channels.cache.get(statConfig.upgrade)
              message.channel.ssend(`**<@${message.author.id}>, gerekli puanlara ulaşarak bir üst yetkiye atlamaya hak kazandın!**`)
              stafflog.ssend(`:tada: ${message.member} üyesi gereken puana ulaştı ve \`${guild.roles.cache.get(sonrakiperm).name}\` isimli yetki rolü verildi!`);
}
      
     islemler.add(`${message.author.id}.mesajatma`, +1);
  let limit = qdb.get('scarysinir');
  qdb.add("scarysinir", 1);
  if(limit >= 10) {  
    puan.add(`${message.author.id}.puanim`, +5);
  islemler.add(`${message.author.id}.mesajpuan`, +5);
    qdb.delete("scarysinir");
   }
}
}

module.exports.statcfg = {
    name: "message"
}