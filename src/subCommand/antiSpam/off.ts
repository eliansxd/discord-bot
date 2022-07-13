import { ISubCommand } from 'helper-package-create-discord-bot';
import { TMetaData } from '../../types/MetaData';
import { Constants } from "discord.js";
// import mongoose from 'mongoose';

export default {
    name: 'off',
    description: 'multiplication',
    options: [
        {
            name: "type",
            description: "chose the type",
            type: Constants.ApplicationCommandOptionTypes.STRING,
            choices: [
                { name: "all channel in server", value: "all" },
                { name: "this channel", value: "this" }
            ], 
            required: true
        }
    ],
    callBack: (input) => {
        return {
            data: {
                content: "chưa có logic XD"
            }
        }
    },

} as ISubCommand<TMetaData>;