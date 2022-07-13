import { Client } from "discord.js";
import { GuildSettingModel } from "../model/GuildSetting";
export const SetupGuildSetting = async (client: Client<true>) => {
  const allGuild = await client.guilds.fetch();
  allGuild.forEach(async (guild) => {
    const HasGuild = await GuildSettingModel.findOne({
      guildID: guild.id,
    });
    if (!HasGuild) {
      await new GuildSettingModel({
        guildID: guild.id,
      }).save();
    }
  });
};
