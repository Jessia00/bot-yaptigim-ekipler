const qdb = require("quick.db");
const puan = new qdb.table("puanayarlama");
const islemler = new qdb.table("puanislemler");

module.exports = async () => {
   let guild = client.guilds.cache.get(config.server);
 	setInterval( async () => {
  let kanal = guild.channels.cache.filter(channel => channel.type == "voice" && channel.members.size > 0);
  kanal.forEach(channel => {
      let members = channel.members.filter(member => !member.user.bot && member.roles.cache.has(moderationConfig.commander));
      members.forEach(member => {
        puan.add(`${member.id}.puanim`, +25);
          islemler.add(`${member.id}.sespuan`, +25);
          islemler.add(`${member.id}.sesdurma`, +6);
               let suankiperm = islemler.get(`permim.${member}.yetki`);
            let sonrakiperm = islemler.get(`sonrakipermim.${member}.yetki`);
            let sonrakininpermi = islemler.get(`onsonrakipermim.${member}.yetki`);
            let gerekenpuan = islemler.get(`permpuanlarim.${member}.yetki`);
            let puanlar = puan.get(`${member.id}.puanim`);
            let puanlarim = puanlar || 0;
      if(puanlarim >= gerekenpuan){ 
            let suankiperm = islemler.get(`permim.${member}.yetki`);
            let sonrakiperm = islemler.get(`sonrakipermim.${member}.yetki`);
            let sonrakininpermi = islemler.get(`onsonrakipermim.${member}.yetki`);
            let gerekenpuan = islemler.get(`permpuanlarim.${member}.yetki`);
         member.roles.add(sonrakiperm);
         member.roles.remove(suankiperm)      
        puan.delete(`${member.id}.puanim`);
    islemler.delete(`${member.id}.kayit`);
    islemler.delete(`${member.id}.mesajatma`);
    islemler.delete(`${member.id}.mesajpuan`);
    islemler.delete(`${member.id}.tagaldirma`);;
    puan.delete(`${member.id}.ekpuan`);
    islemler.delete(`${member.id}.davetyapma`);
    islemler.delete(`${member.id}.davetpuan`);
    islemler.delete(`${member.id}.gorev`);
    islemler.delete(`${member.id}.gorevpuan`);
    islemler.delete(`${member.id}.gorevpuanlarim`);
    islemler.delete(`${member.id}.sesdurma`);
    islemler.delete(`${member.id}.sespuan`);
         islemler.set(`onsonrakipermim.${member}.yetki`, sonrakininpermi);
         let stafflog = guild.channels.cache.get(statConfig.upgrade)
         stafflog.ssend(`:tada: ${member} üyesi gereken puana ulaştı ve \`${guild.roles.cache.get(sonrakiperm).name}\` isimli yetki rolü verildi!`);

}
    });
  });
  }, 60000);
}

module.exports.statcfg = {
    Event: "ready"
}
