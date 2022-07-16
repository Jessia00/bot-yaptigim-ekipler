const Discord = require("discord.js");
module.exports = async(role) => {

    if (role.guild.id !== config.server) return;
    const entry = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = role.guild.members.cache.get(id)
    if(id === config.owner) return;
    if(entry.executor.id === GuardLLLClient.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
//////////////////
role.guild.roles.create({
    data:{
      name: role.name,
      position: role.rawPosition,
      permissions: role.permissions,
      mentionable: role.mentionable,
      hoist: role.hoist,
      color: role.hexColor
    }
  })
//////////////////
await user.ban({reason: "ROL SİLDİ"})
await guardFunctions.closeall(role.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await role.guild.channels.cache.get(guardConfig.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı sağ tık ile kullanıcıyı atmaya çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.g3config = {
      name: "roleDelete"
    }