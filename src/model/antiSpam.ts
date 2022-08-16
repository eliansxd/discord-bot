import { modelOptions, getModelForClass, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class AntiSpam {
  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;

  _id: string;

  @prop()
  guildID: string;
  @prop()
  isEnable: boolean;

  @prop()
  isEnableForAllChannel: boolean;

  @prop()
  enableChannel: string[];
}

export const AntiSpamModel = getModelForClass(AntiSpam);
