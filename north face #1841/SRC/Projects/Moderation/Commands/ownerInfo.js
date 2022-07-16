const { Discord, MessageEmbed } = require("discord.js");
const moment = require("moment");
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports.execute = async(ModerationClient, message, args) => {


    ///////////////////

    let sayi1 = new MessageButton()
    .setID("1")
    .setLabel("1")
    .setStyle("gray");
    
    let sayi2 = new MessageButton()
    .setID("2")
    .setLabel("2")
    .setStyle("gray");
    
    let sayi3 = new MessageButton()
    .setID("3")
    .setLabel("3")
    .setStyle("gray");
    
    let sayi4 = new MessageButton()
    .setID("4")
    .setLabel("4")
    .setStyle("gray");
    
    let sayi5 = new MessageButton()
    .setID("5")
    .setLabel("5")
    .setStyle("gray");
    
    let sayi6 = new MessageButton()
    .setID("6")
    .setLabel("6")
    .setStyle("gray");
    
    let sayi7 = new MessageButton()
    .setID("7")
    .setLabel("7")
    .setStyle("gray");
    
    let sayi8 = new MessageButton()
    .setID("8")
    .setLabel("8")
    .setStyle("gray");
    
    let sayi9 = new MessageButton()
    .setID("9")
    .setLabel("9")
    .setStyle("gray");
    
    const row1 = new MessageActionRow().addComponents(sayi1, sayi2, sayi3)
    const row2 = new MessageActionRow().addComponents(sayi4, sayi5, sayi6)
    const row3 = new MessageActionRow().addComponents(sayi7, sayi8, sayi9)

message.channel.send(`Aşağıdaki menüden kendinize bir işlem seçip sunucu içinde depolanan verilerinizi öğrenebilirsiniz.

**~** 1: Sunucuya giriş tarihinizi öğrenin.
**~** 2: Kayıt olmuş olduğunuz isimleri öğrenin. 
**~** 3: Sunucu istatistiğini öğrenin. 

**~** 4: Son cezanızı öğrenin. 
**~** 5: Geçmiş cezalarınızı öğrenin.
**~** 6: Üstünüzde bulunan rollerin listesini alın.

**~** 7: Tekrar sesli kayıt olun.
**~** 8: Sunucumuz hakkında kısa bilgilendirme alabilirsin.
**~** 9: Hesabınızının açılış tarihini öğrenin.`, { components: [ row1, row2, row3]})  

client.on('clickButton', async (button) => {
    // Button1
    if (button.id === '1') {
        await button.think(true);
        let serverJoin = moment
        .utc(message.guild.members.cache.get(button.clicker.member.id).joinedAt)
        .format("**DD/MM/YYYY**")
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`);
        await button.reply.edit(serverJoin)
}

    // Button2
    if (button.id === '2') {
        await button.think(true);
        let names = memberdb.cek(`isimler.${user.id}`);
        oldnames = `Kullanıcının eski isimleri bulunmamaktadır!`
        if(names) { oldnames = names.length > 0 ? names.map((value, index) => ` \`${value.guildName}\` **(<@&${value.Komut}>) [<@${value.Yetkili}>]**`).join("\n") : "Bu Üyenin İsim Geçmişi Bulunamadı.";    }
        await button.reply.edit(oldnames)
}

    // Button3
    if (button.id === '3') {
        await button.think(true);
        let sunucu = message.guild.memberCount;
    
        let online = message.guild.members.cache.filter(only => only.presence.status != "offline").size;
      
        let isimtagli = message.guild.members.cache.filter(uye => uye.user.username.includes(settings.tag)).size;
        let etikettagli = message.guild.members.cache.filter(uye => uye.user.discriminator.includes("1841")).size;
      const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
        let ses = 0;
        for (const [id, voiceChannel] of voiceChannels) ses += voiceChannel.members.size;
          let sestag = message.guild.members.cache.filter(uye => uye.user.username.includes(settings.nicktag) && uye.user.discriminator.includes(1841) && s.voice.channel).size
          let sestagli2 = sestag;
  
          let boostseviye = message.guild.premiumTier;
          let boostsayi = message.guild.premiumSubscriptionCount;
          
          let sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
  
      let artikac;
      if(sesli >= 5) {artikac = sesli - 5} else { artikac = 0}
  
        await button.reply.edit(`**+** Anlık olarak **${sesli}** (**+${artikac}**) kişi ses kanallarında aktif!
**+** Sunucumuzda toplam **${sunucu}** üye var (**${online}** Aktif)
**+** Toplam **${isimtagli + etikettagli}** kişi **[ ${etikettagli}** Etiket / **${isimtagli}** İsim **]** tagımızı alarak bize destek oluyor
**+** Sunucumuz şuan da **${boostseviye}** seviye ve **${boostsayi}** boost basılmış!`)
}


    // Button4
    if (button.id === '4') {
        await button.think(true);
        let soncezainfo = penals.cek(`sonceza.${member.id}.${settings.server}`);
        await button.reply.edit(`${message.guild.name} Sunucumuza kayıtlı son cezanız aşağıda bulunmaktadır;
\`\`\`cs
> Ceza ID => #${soncezainfo.id}
> Ceza Durumu => ${soncezainfo.durum}
> Yetkili => ${soncezainfo.mod}
> Tür => ${soncezainfo.komut}
> Sebep => ${soncezainfo.sebep}
> Bitiş Tarihi => ${soncezainfo.bitis}
\`\`\``)
}


    // Button5
    if (button.id === '5') {
        await button.think(true);

        let sicilsayi = penals.cek(`sicilsayi.${button.clicker.member.id}.${settings.server}`);
        let sicilminerdelanit = penals.cek(`sicil.${button.clicker.member.id}.${settings.server}`);
     if (!sicilminerdelanit) { await button.reply.edit(`**${message.guild.name}** sunucusunda kayıtlı sicil kayıdınız bulunmamaktadır.`) }

    let sicilinfo = penals.cek(`sicil.${button.clicker.member.id}.${settings.server}`);
   
  let sicilimm = sicilinfo.length > 0 ? sicilinfo.map((value, index) => ` **[${value.komut}]** \`${value.zaman}\` tarihinde **${value.sebep}** nedeniyle <@${value.mod}> tarafından cezalandırıldı. **#${value.id}**`).join("\n") : ""

        if(sicilsayi >= 7) {
            await button.reply.edit(`**${message.guild.name}** sunucusunda kayıtlı **7'den fazla** cezanız bulunduğu için listelenememektedir, \`${settings.prefix}sicil\` komutu ile detaylı bilgi alabilirsiniz`)
                    } else {
            await button.reply.edit(`**${message.guild.name}** sunucusunda kayıtlı tüm cezalarınız aşağıda listenmiştir;

${sicilimm}`)
}
}


    // Button6
    if (button.id === '6') {
        await button.think(true);
        await button.reply.edit(`${button.clicker.member.roles.cache.size <= 5 ? button.clicker.member.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(', ') : `Listelenemedi! (${button.clicker.member.roles.cache.size})`}`)
}


    // Button7
    if (button.id === '7') {
        await button.think(true);
        await button.reply.edit(`10 saniye sonra kayıtsıza atılacaksınız!`).then(x => registerfx.kayitSil(button.clicker.member), 10000)
}


    // Button8
    if (button.id === '8') {
        await button.think(true);
        await button.reply.edit(`BOTLARI RİCHARD YAPTI BU KADAR BİLGİ YETER XDDDD`)
}


    // Button9
    if (button.id === '9') {
        await button.think(true);
        let discordRegister = moment
        .utc(message.guild.members.cache.get(button.clicker.member.id).user.createdAt)
        .format("**DD/MM/YYYY**")
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`);
        await button.reply.edit(discordRegister)
}


    // Button10
    if (button.id === '10') {
        await button.think(true);
        await button.reply.edit(`sa karşim 10`)
}


});
}

module.exports.config = {
    name: "infosetup",
    aliases: [],
    info: "Kullanıcı Bilgi",
    usage: "Taslak",
    description: "Taslak Komutu."
};