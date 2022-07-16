const Discord = require("discord.js");
module.exports = async (message) => {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
  let snipelendin = {
  icerik: message.content,
  sahip: message.author.id,
  yazildi: message.createdTimestamp,
  silindi: Date.now(), 
  kanal: message.channel.id
  }
  await Classic.ayarla(`snipe.${message.guild.id}`, snipelendin)

}; 
  module.exports.config = {
      name: "messageDelete"
    }