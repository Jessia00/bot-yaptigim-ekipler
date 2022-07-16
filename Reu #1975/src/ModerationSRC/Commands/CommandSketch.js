const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {
  moderationFunctions.embedOlustur(message.author, message.channel, "SA", "RANDOM")
  };

module.exports.config = {
    name: "taslak2",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};