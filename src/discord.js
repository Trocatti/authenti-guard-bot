import { Client, Events, IntentsBitField } from "discord.js";
import { memberAdd, messageCreate, interactionCreate, sendMessageVerify } from "./events/index.js";

export const initializeDiscordClient = () => {
  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildMembers,
    ],
  });

  client.once(Events.ClientReady, async (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    sendMessageVerify.execute(_, client)
  });

  client.login(process.env.DISCORD_BOT_TOKEN);

  client.on(Events.GuildMemberAdd, memberAdd.execute);
  client.on(Events.MessageCreate, messageCreate.execute);
  client.on(Events.InteractionCreate, interactionCreate.execute);
};