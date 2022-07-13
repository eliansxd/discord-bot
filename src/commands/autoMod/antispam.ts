import { MessageEmbed } from "discord.js";
import { ICommand } from "helper-package-create-discord-bot";
import { TMetaData } from "../../types/MetaData";

export default {
  name: "antiSpam".toLowerCase(),
  description: "enable or disable anti spam",
  category: "user",
  aliases: [],
    isSlash: true,
    options: [
      
  ],
  callback: async ({ client:_ }) => {
      return {
        embeds:[new MessageEmbed().setTitle("test embed")]
    };
  },

} as ICommand<TMetaData>;