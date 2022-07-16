const Discord = require('discord.js');
const qdb = require("quick.db");
const islemler = new qdb.table("puanislemler");
const puan = new qdb.table("puanayarlama");
var moment = require("moment");
const Invites = new Map();
require("moment-duration-format");
/*
StatClient.on('ready', () => {
  StatClient.guilds.cache.get(config.server).fetchInvites().then(x => Invites.set(x.first().guild.id, x));
});

StatClient.on('inviteCreate', (invite) => {
  const GuildInvites = Invites.get(invite.guild.id);
  GuildInvites.set(invite.code, invite);
  Invites.set(invite.guild.id, GuildInvites);
});

StatClient.on('inviteDelete', (invite) => {
  const GuildInvites = Invites.get(invite.guild.id);
  GuildInvites.delete(invite.code);
  Invites.set(invite.guild.id, GuildInvites);
});

StatClient.on('guildMemberAdd', async (member) => {
  if (member.user.bot) return;

  const GuildInvites = (Invites.get(member.guild.id) || new Collection()).clone()
      , Guild = member.guild
      , Fake = Date.now() - member.user.createdTimestamp < 7 ? true : false;
  Guild.fetchInvites().then(async invites => {
      const invite = invites.find(richard => GuildInvites.has(richard.code) && GuildInvites.get(richard.code).uses < richard.uses) || GuildInvites.find(richard => !invites.has(richard.code)) || Guild.vanityURLCode;
      Invites.set(Guild.id, invites);
      let successful = 0, content = `${member} sunucuya giriş yaptı.`;
      let davetler = islemler.get(`${invite.inviter.id}.davetyapma`);
      let davetlerim = davetler || 0;          
          if (invite === Guild.vanityURLCode) content = `${member} sunucuya özel urlyi kullanarak girdi!`;
          else if (invite.inviter.id === member.id) content = `${member} kendi daveti ile sunucuya giriş yaptı.`
          else {content = `${member} katıldı! **Davet eden**: ${invite.inviter.tag} \`(${davetlerim+1} davet)\` ${Fake ? ':x:' : ':white_check_mark:'}`; 

               islemler.add(`${invite.inviter.id}.davetyapma`, +1);
              puan.add(`${invite.inviter.id}.puanim`, +5);
              islemler.add(`${invite.inviter.id}.davetpuan`, +5);
          let suankiperm = islemler.get(`permim.${invite.inviter.id}.yetki`);
          let sonrakiperm = islemler.get(`sonrakipermim.${invite.inviter.id}.yetki`);
          let sonrakininpermi = islemler.get(`onsonrakipermim.${invite.inviter.id}.yetki`);
          let gerekenpuan = islemler.get(`permpuanlarim.${invite.inviter.id}.yetki`);
          let puanlar = puan.get(`${invite.inviter.id}.puanim`);
          let puanlarim = puanlar || 0;
    if(puanlarim >= gerekenpuan){ 
          let suankiperm = islemler.get(`permim.${invite.inviter.id}.yetki`);
          let sonrakiperm = islemler.get(`sonrakipermim.${invite.inviter.id}.yetki`);
          let sonrakininpermi = islemler.get(`onsonrakipermim.${invite.inviter.id}.yetki`);
          let gerekenpuan = islemler.get(`permpuanlarim.${invite.inviter.id}.yetki`);
       invite.inviter.roles.add(sonrakiperm);
       invite.inviter.roles.remove(suankiperm)  
       islemler.set(`onsonrakipermim.${invite.inviter.id}.yetki`, sonrakininpermi);
          puan.delete(`${invite.inviter.id}.puanim`);
  islemler.delete(`${invite.inviter.id}.kayit`);
  islemler.delete(`${invite.inviter.id}.mesajatma`);
  islemler.delete(`${invite.inviter.id}.mesajpuan`);
  islemler.delete(`${invite.inviter.id}.tagaldirma`);;
  puan.delete(`${invite.inviter.id}.ekpuan`);
  islemler.delete(`${invite.inviter.id}.davetyapma`);
  islemler.delete(`${invite.inviter.id}.davetpuan`);
  islemler.delete(`${invite.inviter.id}.gorev`);
  islemler.delete(`${invite.inviter.id}.gorevpuan`);
  islemler.delete(`${invite.inviter.id}.gorevpuanlarim`);
  islemler.delete(`${invite.inviter.id}.sesdurma`);
  islemler.delete(`${invite.inviter.id}.sespuan`);
member.guild.kanalBul("terfi-log").ssend(`:tada: ${invite.inviter.id} üyesi gereken puana ulaştı ve \`${guild.roles.cache.get(sonrakiperm).name}\` isimli yetki rolü verildi!`);
      }
        }
        member.guild.kanalBul("invite-log").ssend(content)
  }).catch(console.error);
});*/
///////////
class St {
    static appSetup() {
StatClient.login(config.stat).catch(err => console.error("[ STAT ] Discord API Botun tokenini doğrulayamadı."));
}

}
module.exports = St;
