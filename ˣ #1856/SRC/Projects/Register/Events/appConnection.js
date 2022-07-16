const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    RegisterClient.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });
  RegisterClient.channels.cache.get(conf.voice).join();
   }; 
  module.exports.registerconfig = {
      name: "ready"
    }