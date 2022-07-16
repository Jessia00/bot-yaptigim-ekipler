const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(GuardLLLClient, message, args) => {
  guardFunctions.embedOlustur(message.author, message.channel, "as", "RANDOM")
};

module.exports.g3config = {
    name: "ksil",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};