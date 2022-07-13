import { MessageEmbed, Constants } from "discord.js";
import { ICommand } from "helper-package-create-discord-bot";
import { TMetaData } from "../../types/MetaData";

export default {
  name: "anti-spam".toLowerCase(),
  description: "enable or disable anti spam",
  category: "user",
  aliases: [],
  isSlash: true,
  options: [
    {
      name: "action",
      description: "your action",
      type: Constants.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
      options: [
        {
          name: "on",
          description: "turn on anti spam",
          type: Constants.ApplicationCommandOptionTypes.SUB_COMMAND
        },
        {
          name: "off",
          description: "turn off anti spam",
          type: Constants.ApplicationCommandOptionTypes.SUB_COMMAND
        }
      ]
    }
  ],
  callback: async ({ client: _ }) => {
    return {
      embeds: [new MessageEmbed().setTitle("test embed")]
    };
  },

} as ICommand<TMetaData>;