import {
  modelOptions,
  getModelForClass,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { AntiSpam } from "./antiSpam";
import { AntiSwear } from "./antiSwear";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class GuildSetting {
  @prop({
    required: true,
  })
  guildID!: string;

  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;

  _id: string;

  @prop({ ref: () => AntiSpam })
  antiSpam?: Ref<AntiSpam>;

  @prop({ ref: () => AntiSwear })
  antiSwear?: Ref<AntiSwear>;
}

export const GuildSettingModel = getModelForClass(GuildSetting);
