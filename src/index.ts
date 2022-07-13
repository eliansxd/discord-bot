import { Client } from "discord.js";
import dotenv from "dotenv";
import path from "path";
import { allIntents } from "./constants";
import { Command, SubCommand } from "helper-package-create-discord-bot";
import { TMetaData } from "./types/MetaData";
import mongoose from "mongoose";

const prefix = "!";

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
  BotPrefix: prefix,
});

// ông thêm BD_URL đi

const subCommand = new SubCommand({
  client,
  SubCommandPath: path.join(__dirname, "./subCommand"),
  BotPrefix: prefix,
  isDev,
  LogForMessageAndInteraction: isDev,
  metaData: {
    command,
  },
});

// import { connect } from "mongoose";

client.on("ready", async (client) => {
  await command.init();
  await subCommand.init();
  if (!process.env.DB_URL) {
    throw new Error("Don't Have Url Of DB_URL");
  }
  await mongoose.connect(process.env.DB_URL);
  console.log(`\nLogin as ${client.user?.tag}`);
  client.user.setPresence({
    activities: [
      {
        name: "Try / or " + prefix,
        type: "PLAYING",
      },
    ],
  });
});

client.login(process.env.TOKEN);
