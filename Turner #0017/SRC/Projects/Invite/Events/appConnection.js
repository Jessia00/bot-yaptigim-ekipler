const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    InviteClient.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });
   }; 
  module.exports.inviteconfig = {
      name: "ready"
    }