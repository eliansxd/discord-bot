import { Client } from "discord.js";
import dotenv from "dotenv";
import path from "path";
import { allIntents } from "./constants";
dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const client = new Client({
  intents: allIntents,
});

client.on("ready", (client) => {
  console.log(`login as ${client.user.username}`);
});

client.login(process.env.TOKEN);
