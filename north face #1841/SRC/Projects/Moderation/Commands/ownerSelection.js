const { Discord, MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons');

module.exports.execute = async(ModerationClient , message, args) => {
//Button İsim Renk ID

// Button1
let Button1 = new MessageButton()
  .setStyle("red") 
  .setLabel("1")
  .setID('Button1'); 

// Button2
let Button2 = new MessageButton()
  .setStyle("blurple")
  .setLabel("2") 
  .setID('Button2');


//Button Mesaj ve Ayar Kısmı
message.channel.send({ embed: { description: `qwe`}, buttons: [ Button1, Button2] });

client.on('clickButton', async (button) => {
  // Button1
    if (button.id === 'Button1') {
        if (button.clicker.member.roles.cache.get(moderationConfig.rol1)) {
            await button.clicker.member.roles.remove(moderationConfig.rol1)
            await button.think(true);
            await button.reply.edit(`Rol Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(moderationConfig.rol1)
            await button.think(true);
            await button.reply.edit(`Rol Üzerinize Verildi!`)
        }
    }

  // Button2
    if (button.id === 'Button2') {
        if (button.clicker.member.roles.cache.get(moderationConfig.rol2)) {
            await button.clicker.member.roles.remove(moderationConfig.rol2)
            await button.think(true);
            await button.reply.edit(`**Rol Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(moderationConfig.rol2)
            await button.think(true);
            await button.reply.edit(`Rol Üzerinize Verildi!`)
        }

    }
})
};

module.exports.config = {
    name: "selectsetup",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};