import { ICommand } from "helper-package-create-discord-bot";
import { Constants } from "discord.js";
import { TMetaData } from "../../types/MetaData";


export default {
  name: "anti-swear".toLowerCase(),
  description: "Disable and Enable anti swear",
  category: "Auto Mod",
  // aliases: ["p"],
  options: [
    {
      name: "action",
      description: "your action",
      type: Constants.ApplicationCommandOptionTypes.SUB_COMMAND_GROUP,
      options: [
        {
          name: "on",
          description: "turn on anti swear",
          type: Constants.ApplicationCommandOptionTypes.SUB_COMMAND
        },
        {
          name: "off",
          description: "turn off anti swear",
          type: Constants.ApplicationCommandOptionTypes.SUB_COMMAND
        }
      ]
    }
  ],
  isSlash: true,
  callback: async ({client: _}) => {

    // const embedSetting = new MessageEmbed()
    //   .setDescription(`${AntiSwearModel.isEnable ? "" : ""}`)




    return {
      embeds: []
    }
  },

} as ICommand<TMetaData>;