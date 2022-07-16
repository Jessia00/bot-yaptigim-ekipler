const Discord = require("discord.js");
module.exports = async(emoji) => {

    if (emoji.guild.id !== config.server) return;
    const entry = await emoji.guild.fetchAuditLogs({ type: 'EMOJI_CREATE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = emoji.guild.members.cache.get(id)
    if(id === config.owner) return;
    if(entry.executor.id === GuardLLClient.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
//////////////////
emoji.guild.emojis.delete(emoji)
//////////////////
await user.ban({reason: "EMOJİ OLUŞTURDU"})
await guardFunctions.closeall(emoji.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await emoji.guild.channels.cache.get(guardConfig.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı emoji oluşturmaya çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.g2config = {
      name: "emojiCreate"
    }