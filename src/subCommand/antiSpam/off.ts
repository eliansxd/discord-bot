import { ISubCommand } from "helper-package-create-discord-bot";
import { TMetaData } from "../../types/MetaData";
import { Constants } from "discord.js";
import { UpdateAntiSpamSetting } from "../../module/UpdateSettingAntiSpamForGuild";
// import mongoose from 'mongoose';

export default {
  name: "off",
  description: "multiplication",
  options: [
    {
      name: "type",
      description: "chose the type",
      type: Constants.ApplicationCommandOptionTypes.STRING,
      choices: [
        { name: "all channel in server", value: "all" },
        { name: "this channel", value: "channel" },
      ],
      required: true,
    },
  ],
  callBack: async (input) => {
    if (input.type == "message") {
        if (input.args[0]) {
        if (input.args[0] == "all") {
          await UpdateAntiSpamSetting({
            type: input.args[0],
            guildId: input.message.guildId || "",
            typeTurn: "off",
          });
        }
        if (input.args[0] == "channel") {
          await UpdateAntiSpamSetting({
            type: input.args[0],
            guildId: input.message.guildId || "",
            typeTurn: "off",
            channelId: input.message.channel.id,
          });
        }
      }
      return {
        data: "success",
      };
    }
    if (input.type == "interaction") {
      if (input.interaction.options.getString("type", true)) {
        const type = input.interaction.options.getString("type", true);
        if (type == "all") {
          await UpdateAntiSpamSetting({
            type,
            guildId: input.interaction.guildId || "",
            typeTurn: "off",
          });
        }
        if (type == "channel") {
          await UpdateAntiSpamSetting({
            type: type,
            guildId: input.interaction.guildId || "",
            typeTurn: "off",
            channelId: input.interaction.channel?.id || "",
          });
        }
      }
      return {
        data: "success",
      };
    }
    return {
      data: {
        content: "chưa có logic XD",
      },
    };
  },
} as ISubCommand<TMetaData>;
