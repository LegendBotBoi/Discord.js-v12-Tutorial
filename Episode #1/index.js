const Discord = require("discord.js");
const client = new Discord.Client();
const { Prefix, Token } = require("./config.js"); //Default Prefix & Bot Token!

//Ready Event
client.on("ready", async () => {
  console.log(`${client.user.tag} Is Ready And No Error So Far!`) //Console Message!
  client.user.setActivity(`Youtube Videos`, { type: "WATCHING"}) //Bot Activity! | Types : PLAYING , LISTENING , WATCHING , STREAMING
});

//Message Event
client.on("message", async message => {
  if (message.content === "Hi") {
    return message.channel.send("Hello!")
  } else if (message.content === "Ping") {
    return message.channel.send(`Pong! | ${client.ws.ping}`)
  }
})

//Bot Login
client.login(Token);