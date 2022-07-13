import {
  modelOptions,
  getModelForClass,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { AntiSpam } from "./antiSpam";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class GuildSetting {
  @prop()
  guildID: string;

  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;

  _id: string;

  @prop({ ref: () => AntiSpam })
  antiSpam: Ref<AntiSpam>;
}

export const GuildSettingModel = getModelForClass(GuildSetting);