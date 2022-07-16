const Discord = require("discord.js");
require('discord-reply');
module.exports = (msg) => {

    if (
  
      msg.content.toLowerCase() === "tag" ||
  
      msg.content.toLowerCase() === "!tag" ||
  
      msg.content.toLowerCase() === ".tag"
  
    ) {
  
      msg.lineReply(config.nametag);
      msg.lineReply("#"+ config.hashtag +"");
  
    }
  };
  module.exports.configuration = {
      name: "message"
    }