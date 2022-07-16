const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {
  registerFunctions.embedOlustur(message.author, message.channel, "as", "RANDOM")
};

module.exports.configuration = {
    name: "test",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};