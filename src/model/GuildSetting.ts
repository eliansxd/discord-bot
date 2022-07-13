import {
  modelOptions,
  getModelForClass,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { AntiSpam } from "./antiSpam";
import { AntiSwear } from "./antiswear";

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
  
  @prop({ ref: () => AntiSwear })
  antiSwear: Ref<AntiSwear>;
}

export const GuildSettingModel = getModelForClass(GuildSetting);
