import { IIndexFile } from 'helper-package-create-discord-bot';
import path from 'path';
// import { Constants } from 'discord.js';
import { TMetaData } from '../../types/MetaData';

const config: IIndexFile<TMetaData> = {
    name: "antiSpam".toLowerCase(),
    description: 'Disable or Enable anti spam',
    slash: true,
    message: true,
    SubFile: [
        path.join(__dirname, './on.ts'),
        path.join(__dirname, './off.ts'),
    ],
    defaultOption: {},
    optionForAllCommand: [],
    // aliases: ["cal"],
    PrePossessForAllCommand(setBreakPossess, input) {
        console.log("ok")
        const member = input.type == "message" ? input.message.member?.permissions : input.interaction.memberPermissions
        if (!member) {
            setBreakPossess(true)
            return
        }
        if (!member.has("MANAGE_CHANNELS")) {
            setBreakPossess(true)
            return
        }
    },
};
export default config;
