import { Client } from "discord.js";
import dotenv from "dotenv";
import path from "path";
import { allIntents } from "./constants";
import { Command } from "helper-package-create-discord-bot";
import { TMetaData } from "./types/MetaData";
dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const isDev = process.env.NODE_ENV !== "production";

const client = new Client({
  intents: allIntents,
});

const command = new Command<TMetaData>(client, {
  commandDir: path.join(__dirname, "./commands"),
  owner: ["889140130105929769", "972383714166321232"],
  isDev,
  LogForMessageAndInteraction: isDev,
  typescript: isDev,
  metaData: {},
  BotPrefix: "!",
});

client.on("ready", async(client) => {
  await command.init()
  console.log(`login as ${client.user.username}`);
});

client.login(process.env.TOKEN);
