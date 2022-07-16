const Discord = require("discord.js");
const { closeall } = require("../functions");
module.exports = async(webhook) => {

    if (webhook.guild.id !== config.server) return;
    const entry = await webhook.guild.fetchAuditLogs({ type: 'WEBHOOK_CREATE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = webhook.guild.members.cache.get(id)
    if(id === config.owner) return;
    if(entry.executor.id === client.user.id) return;
    if(id.includes(config.safezone)) return;
    if(id.includes(config.safebots)) return;
//////////////////
webhook.delete()
//////////////////
await user.ban({reason: config.reason})
await closeall(webhook.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await webhook.guild.channels.cache.get(config.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı sağ tık ile kullanıcıyı atmaya çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.configuration = {
      name: "webhookUpdate"
    }