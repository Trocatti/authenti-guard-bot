import { Client, Events, IntentsBitField } from "discord.js";
import { memberAdd, messageCreate, interactionCreate, sendMessageVerify } from "./events";

export const initializeDiscordClient = () => {
  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildMembers,
    ],
  });

  client.once(Events.ClientReady, async (readyClient: Client<boolean>) => {
    console.log(`Ready! Logged in as ${readyClient?.user?.tag}`);
    sendMessageVerify.execute(client)
  });

  client.login(process.env.DISCORD_BOT_TOKEN);

  client.on(Events.GuildMemberAdd, async (member) => await memberAdd.execute(member, client));
  client.on(Events.MessageCreate, async (message) => await messageCreate.execute(message, client));
  client.on(Events.InteractionCreate, async (interaction) => await interactionCreate.execute(interaction, client));
};