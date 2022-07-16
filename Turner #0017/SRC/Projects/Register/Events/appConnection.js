const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    RegisterClient.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });
   }; 
  module.exports.registerconfig = {
      name: "ready"
    }