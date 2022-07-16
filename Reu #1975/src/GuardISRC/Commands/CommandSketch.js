const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(GuardLClient, message, args) => {
  guardFunctions.embedOlustur(message.author, message.channel, "as", "RANDOM")
};

module.exports.g1config = {
    name: "ksil",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};