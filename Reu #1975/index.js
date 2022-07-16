const {Client} = require('discord.js');
const RegisterClient = global.RegisterClient = new Client({ fetchAllMembers: true });
const ModerationClient = global.ModerationClient = new Client({ fetchAllMembers: true });
const ChatGuardClient = global.ChatGuardClient = new Client({ fetchAllMembers: true });
const GuardLClient = global.GuardLClient = new Client({ fetchAllMembers: true });
const GuardLLClient = global.GuardLLClient = new Client({ fetchAllMembers: true });
const GuardLLLClient = global.GuardLLLClient = new Client({ fetchAllMembers: true });
const StatClient = global.StatClient = new Client({ fetchAllMembers: true });
const client = global.client = new Client({ fetchAllMembers: true });
const qdb = require('quick.db');
const fs = require("fs");StatClient
const config = global.config = require("./MainFiles/Configurations/globalConfig");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
global.RegisterClient = RegisterClient;
global.ModerationClient = ModerationClient;
global.ChatGuardClient = ChatGuardClient; 
global.GuardLClient = GuardLClient; 
global.GuardLLClient = GuardLLClient; 
global.GuardLLLClient = GuardLLLClient; 
global.StatClient = StatClient; 
///////////////// GLOBALS /////////////////
const globalFunctions = global.globalFunctions = require('./MainFiles/Functions/globalFunctions');
const emojis = global.emojis = require('./MainFiles/Configurations/globalEmojis');
globalFunctions.dataHandler()
require("./MainFiles/Functions/appUtils");
///////////////// GLOBALS /////////////////

///////////////// MAINS /////////////////

const modMain = global.modMain = require("./MainFiles/Main/Main.Moderation");
const globalAnswer = global.globalAnswer = require("./MainFiles/Functions/globalAnswer");
const regMain = global.regMain = require("./MainFiles/Main/Main.Register");
const CgMain = global.CgMain = require("./MainFiles/Main/Main.ChatGuard");
const gMain = global.gMain = require("./MainFiles/Main/Main.Guard");
const sMain = global.sMain = require("./MainFiles/Main/Main.Stat");
modMain.appSetup()
regMain.appSetup()
CgMain.appSetup()
gMain.appSetup()
sMain.appSetup()
globalAnswer.replySetup()
///////////////// MAINS /////////////////

/////////////////// MODERATION HANDLER ///////////////////
ModerationClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
    .substring(config.prefix.length)
    .split(" ");
  let command = args[0];
  var veriler = ["taslak2", "kb", "info", "kullanicibilgi", "me", "join", "git",
  "get", "gel", "lock", "kilit", "snipe", "afk", "avatar", "pp", "clear", "sil",
  "slowmode", "slow", "yavasmod", "say", "voicecontrol", "ses", "sesli", "rollog",
  "sicil", "enrollment", "chatmute", "cm", "yazilimute", "yazilisustur", "chatsustur", 
  "cmute", "csustur", "csustur", "ceza", "ci", "punishment", "cezainfo", "cezabilgi",
  "voicemute", "vm", "seslimute", "seslisustur", "voicesustur", "vmute", "vsustur",
  "ysustur", "cezalı", "jail", "warn", "uyar", "uyarı", "uyari", "yargı", "yasakla",
  "uçur", "ucur", "uçuş", "infaz", "ban", "karantinaal", "unkarantina", "uk", "rq",
  "removequarantine", "private", "priv", "voice"]
  if(veriler.includes(command)) {
  let moderasyonbotu = message.ModerationClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(moderasyonbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(moderasyonbotu, message, args);
}
}
})
/////////////////// REGISTER HANDLER ///////////////////
RegisterClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
    .substring(config.prefix.length)
    .split(" ");
 let command = args[0];
 var veriler = ["test","booster", "rich", "vip", "ozel", "i", "name", 
 "n", "isim", "oldnames", "isimler", "kayit", "kayıt", "kız", "bay", 
 "bayan", "k", "kadın", "kiz", "kadin", "erkek", "e", "unregister",
 "unreg", "kayitsiz"]
if(veriler.includes(command)) {
  let registerbotu = message.RegisterClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(registerbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(registerbotu, message, args);
}
}
})
/////////////////// CHATGUARD HANDLER ///////////////////
ChatGuardClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
    .substring(config.prefix.length)
    .split(" ");
 let command = args[0];
 var veriler = ["reklam-sil", "küfür-sil", "reklamsil", "küfürsil", "rsil", "ksil"]
if(veriler.includes(command)) {
  let chatguardbotu = message.ChatGuardClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(chatguardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(chatguardbotu, message, args);
}
}
})
/////////////////// STAT HANDLER ///////////////////
StatClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
    .substring(config.prefix.length)
    .split(" ");
 let command = args[0];
 var veriler = ["yetkilistat", "ystat", "stat", "activity", "push", "tagli"]
if(veriler.includes(command)) {
  let statbotu = message.StatClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(statbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(statbotu, message, args);
}
}
})
/////////////////// GUARD I HANDLER ///////////////////
GuardLClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
    .substring(config.prefix.length)
    .split(" ");
 let command = args[0];
 var veriler = ["qwe"]
if(veriler.includes(command)) {
  let guardlbotu = message.GuardLClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardlbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardlbotu, message, args);
}
}
})
/////////////////// X HANDLER ///////////////////
GuardLLClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
    .substring(config.prefix.length)
    .split(" ");
 let command = args[0];
 var veriler = ["qwe"]
if(veriler.includes(command)) {
  let guardllbotu = message.GuardLLClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardllbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardllbotu, message, args);
}
}
})
/////////////////// X HANDLER ///////////////////
GuardLLLClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
    .substring(config.prefix.length)
    .split(" ");
 let command = args[0];
 var veriler = ["qwe"]
if(veriler.includes(command)) {
  let guardlllbotu = message.GuardLLLClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardlllbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardlllbotu, message, args);
}
}
})
/////////////////// X HANDLER ///////////////////

/////////////////// MODERATION HANDLER ///////////////////
fs.readdir("./src/ModerationSRC/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
  console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
console.log('\x1b[32m%s\x1b[0m', `[ MODERATION CONNECTED ]`);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/ModerationSRC/Commands/${file}`);
      if(!prop.config) return;
      if(typeof prop.onLoad === "function") prop.onLoad(ModerationClient);
      commands.set(prop.config.name, prop);
      if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
fs.readdir("./src/ModerationSRC/Events", (err, files) => {
  if(err) return console.error(err);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/ModerationSRC/Events/${file}`);
      if(!prop.config) return;
      ModerationClient.on(prop.config.name, prop);
  });
});
/////////////////// MODERATION HANDLER ///////////////////

/////////////////// REGISTER HANDLER ///////////////////
fs.readdir("./src/RegisterSRC/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
console.log('\x1b[32m%s\x1b[0m', `[ REGISTER CONNECTED ]`);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/RegisterSRC/Commands/${file}`);
      if(!prop.configuration) return;
      if(typeof prop.onLoad === "function") prop.onLoad(RegisterClient);
      commands.set(prop.configuration.name, prop);
      if(prop.configuration.aliases) prop.configuration.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
fs.readdir("./src/RegisterSRC/Events", (err, files) => {
  if(err) return console.error(err);
  console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
  console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/RegisterSRC/Events/${file}`);
      if(!prop.configuration) return;
      RegisterClient.on(prop.configuration.name, prop);
  });
});
/////////////////// REGISTER HANDLER ///////////////////

/////////////////// GUARD I HANDLER ///////////////////
fs.readdir("./src/GuardISRC/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
console.log('\x1b[32m%s\x1b[0m', `[ GUARDI CONNECTED ]`);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/RegisterSRC/Commands/${file}`);
      if(!prop.g1config) return;
      if(typeof prop.onLoad === "function") prop.onLoad(GuardLClient);
      commands.set(prop.g1config.name, prop);
      if(prop.g1config.aliases) prop.g1config.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
fs.readdir("./src/GuardISRC/Events", (err, files) => {
  if(err) return console.error(err);
  console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
  console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/GuardISRC/Events/${file}`);
      if(!prop.g1config) return;
      GuardLClient.on(prop.g1config.name, prop);
  });
});
/////////////////// GUARD I HANDLER ///////////////////

/////////////////// GUARD II HANDLER ///////////////////
fs.readdir("./src/GuardIISRC/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
console.log('\x1b[32m%s\x1b[0m', `[ GUARDII CONNECTED ]`);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/GuardIISRC/Commands/${file}`);
      if(!prop.g2config) return;
      if(typeof prop.onLoad === "function") prop.onLoad(GuardLLClient);
      commands.set(prop.g2config.name, prop);
      if(prop.g2config.aliases) prop.g2config.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
fs.readdir("./src/GuardIISRC/Events", (err, files) => {
  if(err) return console.error(err);
  console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
  console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/GuardIISRC/Events/${file}`);
      if(!prop.g2config) return;
      GuardLLClient.on(prop.g2config.name, prop);
  });
});
/////////////////// GUARD II HANDLER ///////////////////

/////////////////// GUARD III HANDLER ///////////////////
fs.readdir("./src/GuardIIISRC/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
console.log('\x1b[32m%s\x1b[0m', `[ GUARDIII CONNECTED ]`);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/GuardIIISRC/Commands/${file}`);
      if(!prop.g3config) return;
      if(typeof prop.onLoad === "function") prop.onLoad(GuardLLLClient);
      commands.set(prop.g3config.name, prop);
      if(prop.g3config.aliases) prop.g3config.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
fs.readdir("./src/GuardIIISRC/Events", (err, files) => {
  if(err) return console.error(err);
  console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
  console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/GuardIIISRC/Events/${file}`);
      if(!prop.g3config) return;
      RegisterClient.on(prop.g3config.name, prop);
  });
});
/////////////////// REGISTER HANDLER ///////////////////

/////////////////// CHATGUARD HANDLER ///////////////////
fs.readdir("./src/ChatGuardSRC/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
console.log('\x1b[32m%s\x1b[0m', `[ CHATGUARD CONNECTED ]`);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/ChatGuardSRC/Commands/${file}`);
      if(!prop.configim) return;
      if(typeof prop.onLoad === "function") prop.onLoad(ChatGuardClient);
      commands.set(prop.configim.name, prop);
      if(prop.configim.aliases) prop.configim.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
fs.readdir("./src/ChatGuardSRC/Events", (err, files) => {
  if(err) return console.error(err);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/ChatGuardSRC/Events/${file}`);
      if(!prop.configim) return;
      ChatGuardClient.on(prop.configim.name, prop);
  });
});
/////////////////// CHATGUARD HANDLER ///////////////////

/////////////////// CHATGUARD HANDLER ///////////////////
fs.readdir("./src/StatSRC/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
console.log('\x1b[32m%s\x1b[0m', `[ STAT CONNECTED ]`);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/StatSRC/Commands/${file}`);
      if(!prop.statcfg) return;
      if(typeof prop.onLoad === "function") prop.onLoad(StatClient);
      commands.set(prop.statcfg.name, prop);
      if(prop.statcfg.aliases) prop.statcfg.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
fs.readdir("./src/StatSRC/Events", (err, files) => {
  if(err) return console.error(err);
console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
console.log(`   `);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/StatSRC/Events/${file}`);
      if(!prop.statcfg) return;
      StatClient.on(prop.statcfg.name, prop);
  });
});
/////////////////// CHATGUARD HANDLER ///////////////////

client.rankPoint = {
  "puan1": "1000",
  "puan2": "3000",
  "puan3": "5000",
  "puan4": "7000",
  "puan5": "9000",
  "puan6": "11000",
  "puan7": "13000",
  "puan8": "15000",  
  "puan9": "17000",
  "puan10": "19000",
  "puan11": "21000",
  "puan12": "23000",
  "puan13": "25000",
  "puan14": "27000"
};
