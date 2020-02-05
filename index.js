const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap");
const bot = new Discord.Client();
const config = bot.config = require("./config.json");
const colors = bot.colors = require('./colours.json');

bot.commands = new Enmap();
bot.functions = new Enmap();
bot.events = new Enmap();

const xpCommands = fs.readdirSync(`./dependencies/xp/`).filter(file => file.endsWith('.js'));
for (const file of xpCommands) {
  const command = require(`./dependencies/xp/${file}`);
  let xpName = file.split(".")[0];
  bot.commands.set(xpName, command);
  console.log(`XP Command ${xpName} Initialized!`);
};

const calcCommands = fs.readdirSync("./dependencies/calc/").filter(file => file.endsWith('.js'));
for (const file of calcCommands) {
  const command = require(`./dependencies/calc/${file}`);
  let calcName = file.split(".")[0];
  bot.commands.set(calcName, command);
  console.log(`Calc Command ${calcName} Initialized!`);
};

const runcalcCommands = fs.readdirSync("./dependencies/calc/runcalc/").filter(file => file.endsWith('.js'));
for (const file of runcalcCommands) {
  const command = require(`./dependencies/calc/runcalc/${file}`);
  let runcalcName = file.split(".")[0];
  bot.commands.set(runcalcName, command);
  console.log(`RunCalc Command ${runcalcName} Initialized!`);
};

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
    console.log(`Event ${eventName} Established!`);
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    if (file.startsWith('-')) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    bot.commands.set(commandName, props);
    console.log(`Command ${commandName} Initialized!`);
  });
});

fs.readdir("./functions/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    if (file.startsWith('-')) return;
    let props = require(`./functions/${file}`);
    let functionName = file.split(".")[0];
    bot.functions.set(functionName, props);
    console.log(`Function ${functionName} Initialized!`);
  });
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    if (file.startsWith('-')) return;
    let props = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.events.set(eventName, props);
    console.log(`Event ${eventName} Initialized!`);
  });
});

bot.login(config.token);