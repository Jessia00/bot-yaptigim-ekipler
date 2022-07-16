const { Discord, MessageEmbed } = require("discord.js");
const moment = require("moment");
module.exports.execute = async(client, message, args) => {

        let yetkili;
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let sonisim;
        let isim = User.cek(`sonisim.${member.id}`);
        let yas = User.cek(`sonyas.${member.id}`);
        let oldnames;
        sonisim = `Sunucumuza kayıt olmamış!`
        if(isim) {sonisim = `${isim} | ${yas}`}
        let erkekteyitleri = Functions.erkekTeyitgetir(member);
        let kadinteyitleri = Functions.kadinTeyitgetir(member);
        let toplam = erkekteyitleri + kadinteyitleri;
        if(member.roles.cache.has(config.register)) { 
yetkili = `**
${emojis.greenicon} Yetkili Bilgileri**
\`Toplam Kayıtları\` ${toplam || 0} Adet
\`Erkek Kayıtları\` ${erkekteyitleri || 0} Adet
\`Kadın Kayıtları\` ${kadinteyitleri || 0} Adet`} else {
             yetkili = ""
            }

        let status = member.presence.status
        .toString()
        .replace("dnd", `${emojis.dnd} Rahatsız Etmeyin`)
        .replace("online", `${emojis.online} Çevrimiçi`)
        .replace("idle", `${emojis.idle} Boşta`)
        .replace("offline", `${emojis.offline} Çevrimdışı`);
        let discordRegister = moment
        .utc(message.guild.members.cache.get(member.id).user.createdAt)
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

        let serverJoin = moment
        .utc(message.guild.members.cache.get(member.id).joinedAt)
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

        let names = User.cek(`isimler.${member.id}`);
        oldnames = `Kullanıcının eski isimleri bulunmamaktadır!`
        if(names) { oldnames = names.length > 0 ? names.map((value, index) => ` \`${value.guildName}\` **(<@&${value.Komut}>) [<@${value.Yetkili}>]**`).join("\n") : "Bu Üyenin İsim Geçmişi Bulunamadı.";    }


        Functions.embedOlustur(message.author, message.channel, `${member} kullanıcısının sunucu içerisinde ve discord üstündeki bilgisi aşağıda listelenmiştir;

**${emojis.redicon} Genel Bilgileri**
\`Kullanıcı Adı\` ${member.displayName}
\`İsim Ve Yaşı\` ${sonisim}
\`Aktiflik Durumu\` ${status}
\`Kayıt Tarihi\` ${discordRegister}
\`Katılma Tarihi\` ${serverJoin}

**${emojis.purpleicon} Eski İsimleri**
${oldnames}
${yetkili}`, "RANDOM")
};

module.exports.config = {
    name: "info",
    aliases: ["kb", "kullanicibilgi", "me"],
    usage: "Taslak",
    description: "Taslak Komutu."
};