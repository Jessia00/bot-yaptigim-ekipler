const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {
  dataBase.embedOlustur(message.author, message.channel, "as", "RANDOM")
};

module.exports.configuration = {
    name: "ksil",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};