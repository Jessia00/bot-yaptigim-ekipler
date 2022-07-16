const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {
  chatGuardFunctions.embedOlustur(message.author, message.channel, "as", "RANDOM")
};

module.exports.configim = {
    name: "ksil",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};