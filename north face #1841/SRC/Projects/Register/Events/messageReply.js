const Discord = require("discord.js");
require('discord-reply');
module.exports = (msg) => {

    if (
  
      msg.content.toLowerCase() === "tag" ||
  
      msg.content.toLowerCase() === "!tag" ||
  
      msg.content.toLowerCase() === ".tag"
  
    ) {
      msg.lineReply(settings.tag);
      msg.lineReply(settings.hashtag);
  
    }
  };
  module.exports.registerconfig = {
      name: "message"
    }