const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    Guard1Client.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });
   }; 
  module.exports.guard1config = {
      name: "ready"
    }