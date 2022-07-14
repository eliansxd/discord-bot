import { AntiSpamModel } from "../model/antiSpam";
import { GuildSettingModel } from "../model/GuildSetting";

interface BaseUpdateAntiSpamSetting {
  guildId: string;
  typeTurn: "on" | "off";
}

interface IUpdateAntiSpamSettingAllInput extends BaseUpdateAntiSpamSetting {
  type: "all";
}

interface IUpdateAntiSpamSettingChannelInput extends BaseUpdateAntiSpamSetting {
  type: "channel";
  channelId: string;
}

type TUpdateAntiSpamSettingInput =
  | IUpdateAntiSpamSettingAllInput
  | IUpdateAntiSpamSettingChannelInput;

export const UpdateAntiSpamSetting = async (
  input: TUpdateAntiSpamSettingInput
) => {
  let antiSpamData = await AntiSpamModel.findOne({
    guildID: input.guildId,
  });
  if (!antiSpamData) {
    await new AntiSpamModel({
      guildID: input.guildId,
      ...(input.type == "all"
        ? { isEnableForAllChannel: input.typeTurn == "on" }
        : {}),
      ...(input.type == "channel"
        ? input.typeTurn == "on"
          ? { enableChannel: [input.channelId] }
          : {}
        : {}),
    }).save();
  } else if (
    antiSpamData.isEnableForAllChannel != (input.typeTurn == "on") &&
    input.type == "all"
  ) {
    await AntiSpamModel.findOneAndUpdate(
      {
        guildID: input.guildId,
      },
      {
        isEnableForAllChannel: input.typeTurn == "on",
      }
    );
  } else if (input.type == "channel") {
    await AntiSpamModel.findOneAndUpdate(
      {
        guildID: input.guildId,
      },
      {
        ...(input.typeTurn == "on"
          ? antiSpamData.enableChannel.includes(input.channelId)
            ? {}
            : { $push: { enableChannel: input.channelId } }
          : { $pull: { enableChannel: input.channelId } }),
      }
    );
  }
  antiSpamData = await AntiSpamModel.findOne({
    guildID: input.guildId,
  });
  let guildData = await GuildSettingModel.findOne({
    guildID: input.guildId,
  });

  if (!guildData) {
    await new GuildSettingModel({
      guildID: input.guildId,
      antiSpam: antiSpamData?._id,
    }).save();
  } else {
    await GuildSettingModel.findOneAndUpdate(
      {
        guildID: input.guildId,
      },
      {
        antiSpam: antiSpamData?._id,
      }
    );
  }
};
