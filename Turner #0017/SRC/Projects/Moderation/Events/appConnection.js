const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    ModerationClient.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });
   }; 
  module.exports.config = {
      name: "ready"
    }