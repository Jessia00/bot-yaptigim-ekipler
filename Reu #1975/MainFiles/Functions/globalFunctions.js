const Discord = require('discord.js');
const fs = require("fs");

class globalFunctions {
    static dataHandler() {
    const registerFunctions = global.registerFunctions = require('../Functions/registerFunctions.js');
    const chatGuardFunctions = global.chatGuardFunctions = require('../Functions/chatGuardFunctions.js');
    const moderationFunctions = global.moderationFunctions = require('../Functions/moderationFunctions.js');
    const statFunctions = global.statFunctions = require('../Functions/statFunctions.js');
    const guardFunctions = global.guardFunctions = require('../Functions/guardFunctions.js');
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    console.log('\x1b[33m%s\x1b[0m', `[ GLOBAL FUNCTIONS LOADED ]`)

    const registerConfig = global.registerConfig = require('../Configurations/registerConfig');
    const chatGuardConfig = global.chatGuardConfig = require('../Configurations/chatGuardConfig');
    const moderationConfig = global.moderationConfig = require('../Configurations/moderationConfig');
    const statConfig = global.statConfig = require('../Configurations/statConfig');
    const guardConfig = global.guardConfig = require('../Configurations/guardConfig');
    console.log('\x1b[33m%s\x1b[0m', `[ GLOBAL CONFIGS LOADED ]`)

}

}
module.exports = globalFunctions;
