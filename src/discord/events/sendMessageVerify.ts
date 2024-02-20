import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Channel, Client, TextChannel } from "discord.js";

const CHANNEL_WELCOME_ID = "1208268373037817856" // canal: bem-vindo mock

export default {
  async execute(client: Client, channelId: string = CHANNEL_WELCOME_ID) {
    const channel: Channel | null = await client.channels.fetch(channelId);

    if (!channel) {
      throw new Error("Channel not found")
    }

    const buttonConfirm = new ButtonBuilder()
      .setCustomId("openModalEmail")
      .setLabel("Verificação")
      .setStyle(ButtonStyle.Success);

    const buttonQuite = new ButtonBuilder()
      .setCustomId("quiteService")
      .setLabel("Sair do servidor!")
      .setStyle(ButtonStyle.Danger);

    const row: ActionRowBuilder<any> = new ActionRowBuilder().addComponents(
      buttonConfirm,
      buttonQuite
    );

    (channel as TextChannel).send({
      content:
        "Faça a verificação com seu e-mail utilizado na compra do curso.",
      components: [row],
    });
  },
};
