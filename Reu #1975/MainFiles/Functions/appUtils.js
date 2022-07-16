const { GuildMember, Guild, TextChannel, Message, MessageEmbed, ReactionCollector } = require("discord.js");
const Webhooklar = {};

Guild.prototype.emojiGöster = function(emojiid) {
    let emoji = this.emojis.cache.get(emojiid)
    return emoji;
}

Promise.prototype.sil = function(time) {
    if (this) this.then(s => {
        if (s.deletable) s.delete({ timeout: time * 1000 }).catch(e => {});
    });
};

Guild.prototype.kanalBul = function(kanalisim) {
    let kanal = this.channels.cache.find(k => k.name === kanalisim)
    return kanal;
}

TextChannel.prototype.rsend = async function (content, options) {
    if (Webhooklar[this.id]) return (await Webhooklar[this.id].send(content, options));
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == RegisterClient.user.username),
        result;
    if (!webh) {
        webh = await this.createWebhook(RegisterClient.user.username, {
            avatar: RegisterClient.user.avatarURL()
        });
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    } else {
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    }
    return result;
};

TextChannel.prototype.mbsend = async function (content, options) {
    if (Webhooklar[this.id]) return (await Webhooklar[this.id].send(content, options));
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == ModerationClient.user.username),
        result;
    if (!webh) {
        webh = await this.createWebhook(ModerationClient.user.username, {
            avatar: ModerationClient.user.avatarURL()
        });
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    } else {
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    }
    return result;
};


TextChannel.prototype.msend = async function (content, options) {
    if (Webhooklar[this.id]) return (await Webhooklar[this.id].send(content, options));
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == ModerationClient.user.username),
        result;
    if (!webh) {
        webh = await this.createWebhook(ModerationClient.user.username, {
            avatar: ModerationClient.user.avatarURL()
        });
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    } else {
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    }
    return result;
};

TextChannel.prototype.ssend = async function (content, options) {
    if (Webhooklar[this.id]) return (await Webhooklar[this.id].send(content, options));
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == StatClient.user.username),
        result;
    if (!webh) {
        webh = await this.createWebhook(StatClient.user.username, {
            avatar: StatClient.user.avatarURL()
        });
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    } else {
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    }
    return result;
};

TextChannel.prototype.gsend = async function (content, options) {
    if (Webhooklar[this.id]) return (await Webhooklar[this.id].send(content, options));
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == GuardLClient.user.username),
        result;
    if (!webh) {
        webh = await this.createWebhook(GuardLClient.user.username, {
            avatar: GuardLClient.user.avatarURL()
        });
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    } else {
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    }
    return result;
};

TextChannel.prototype.cgsend = async function (content, options) {
    if (Webhooklar[this.id]) return (await Webhooklar[this.id].send(content, options));
    let entegrasyonlar = await this.fetchWebhooks();
    let webh = entegrasyonlar.find(e => e.name == ChatGuardClient.user.username),
        result;
    if (!webh) {
        webh = await this.createWebhook(ChatGuardClient.user.username, {
            avatar: ChatGuardClient.user.avatarURL()
        });
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    } else {
        Webhooklar[this.id] = webh;
        result = await webh.send(content, options);
    }
    return result;
};

Guild.prototype.log = async function log(cezaID, yetkili, uye, sebep, as, bz, tip, channelName) {
    let channel = this.channels.cache.find(x => x.name === channelName);
    let tur;
    if(tip === "chatmute") tur = "metin kanallarından susturuldu!"
    if(tip === "voicemute") tur = "ses kanallarından susturuldu!"
    if(tip === "jail") tur = "cezalandırıldı!"
    if(tip === "warn") tur = "uyarıldı!"
    if(tip === "ban") tur = "yasaklandı!"
    if (channel) {
    moderationFunctions.embedOlustur(yetkili, channel, `${uye} adlı üye **${sebep}** sebebi ile ${yetkili} tarafından ${tur} **[**\`#${cezaID}\`**]**

➸ Ceza Sebebi: \`${sebep}\`
➸ Atılma tarihi: \`${as}\`
➸ Aitiş tarihi: \`${bz}\``, "RANDOM")
    }
}

Guild.prototype.puanlog = async function puanlog(yetkili, uye, miktar, tip, channelName) {
    let channel = this.channels.cache.find(x => x.name === channelName);
    let tur;
    if(tip === "chatmute") tur = "yazılı kanallarda susturulduğu için **+10** alarak"
    if(tip === "voicemute") tur = "ses kanallarda susturulduğu için **+10** alarak"
    if(tip === "jail") tur = "cezalandırıldığı için **+20** alarak"
    if(tip === "warn") tur = "uyarıldığı için **+5** alarak"
    if(tip === "ban") tur = "yasaklandığı için **+60** alarak"
    if (channel) {
    channel.msend(`<@${uye}> adlı üye <@${yetkili}> tarafından ${tur} \`${miktar} Puan\` oldu!`)
    }
}
Guild.prototype.unlog = async function unlog(cezaID, yetkili, uye, sebep, as, bz, tip, channelName) {
    let channel = this.channels.cache.find(x => x.name === channelName);
    let tur;
    if(tip === "chatmute") tur = "metin kanallarındaki susturulması bitti!"
    if(tip === "voicemute") tur = "sesli kanallardaki susturulması bitti!"
    if(tip === "jail") tur = "cezası bitti!"
    if (channel) {
    moderationFunctions.embedOlustur(yetkili, channel, `${uye} adlı üyenin ${yetkili} tarafından atılan ${tur}. **[**\`#${cezaID}\`**]**`, "RANDOM")
    }
}



Guild.prototype.kayıtLog = async function kayıtLog(yetkili, üye, cins, channelName) {
    let kanal = this.channels.cache.find(k => k.name === channelName);
    let cinsiyet;
    if(cins === "erkek") {
     cinsiyet = "Erkek"
    } else if(cins === "kadın") {
     cinsiyet = "Kadın"
    }
    if(kanal) {
        registerFunctions.embedOlustur(yetkili, kanal, `${üye} isimli üye **${tarihsel(Date.now())}** tarihinde ${yetkili} tarafından **${cinsiyet}** olarak kayıt edildi.`, "RANDOM")
    };
}
