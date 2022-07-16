const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    RegisterClient.user.setPresence({ activity: { name: config.RegisterActivity }, status: "idle" });
  }; 
  module.exports.configuration = {
      name: "ready"
    }