const Discord = require("discord.js");
module.exports = async(channel) => {

    if (channel.guild.id !== config.server) return;
    const entry = await channel.guild.fetchAuditLogs({ type: "CHANNEL_CREATE" }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = channel.guild.members.cache.get(id)
    if(id === config.owner) return;
    if(entry.executor.id === GuardLClient.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
    if (entry.executor.id === client.user.id) return;
    await channel.delete()
    await user.ban({reason: "KANAL OLUŞTURDU"})
    await guardFunctions.closeall(channel.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
      await channel.guild.channels.cache.get(guardConfig.log).send(
        new Discord.MessageEmbed()
        .setDescription(`${user} (${user.id}) **Kullanıcısı sunucumuzda bir kanal açmaya çalıştı ve beni geçemedi ;)**`)
        .setColor("RANDOM")
        .setFooter(user.id, user.user.avatarURL())
      )
  
    }; 
  module.exports.g1config = {
      name: "channelCreate"
    }