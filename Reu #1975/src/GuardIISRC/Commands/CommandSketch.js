const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(GuardLLClient, message, args) => {
  guardFunctions.embedOlustur(message.author, message.channel, "as", "RANDOM")
};

module.exports.g2config = {
    name: "ksil",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};