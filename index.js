const Eris = require('eris');

const keepAlive = require("./server.js")

const bot = new Eris("OTYwNDQ3NTg2ODA2OTU2MDk0.Yk3CUA.e4-nGQDzn6ZrQBQ7jmLF4houetM", {
  intents: ["guilds", "guildPresences", "guildMembers", "guildMessages"],
  getAllUsers: true
});

bot.on('ready', () => {
  console.log("Hello DIscord :)")
})

bot.connect();
keepAlive()
