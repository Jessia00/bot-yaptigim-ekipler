const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    ModerationClient.user.setPresence({ activity: { name: config.ModerationActivity }, status: "idle" });
   }; 
  module.exports.config = {
      name: "ready"
    }