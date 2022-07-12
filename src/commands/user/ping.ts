import { ICommand } from "helper-package-create-discord-bot";
import { TMetaData } from "../../types/MetaData";

export default {
  name: "ping",
  description: "Ping",
  category: "user",
  aliases: ["p"],
  isSlash: true,
  callback: async ({ client }) => {
    return "Pong! ping : " + client.ws.ping + "ms";
  },

} as ICommand<TMetaData>;