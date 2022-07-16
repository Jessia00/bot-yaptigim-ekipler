const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
  StatClient.user.setPresence({ activity: { name: config.StatActivity }, status: "idle" });
  }; 
  module.exports.statcfg = {
      name: "ready"
    }