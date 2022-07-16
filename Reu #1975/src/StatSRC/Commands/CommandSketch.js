const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(StatClient, message, args) => {
  statFunctions.embedOlustur(message.author, message.channel, "as", "RANDOM")
};

module.exports.statcfg = {
    name: "ksil",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};