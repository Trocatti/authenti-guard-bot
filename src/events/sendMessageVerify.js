import { ActionRowBuilder, ButtonBuilder } from "discord.js";

export default {
  async execute(_, client) {
    const channel = await client.channels.fetch("1208268373037817856"); // canal: bem-vindo

    const buttonConfirm = new ButtonBuilder()
      .setCustomId("openModalEmail")
      .setLabel("Verificação")
      .setStyle(ButtonStyle.Success);

    const buttonQuite = new ButtonBuilder()
      .setCustomId("quiteService")
      .setLabel("Sair do servidor!")
      .setStyle(ButtonStyle.Danger);

    const row = new ActionRowBuilder().addComponents(
      buttonConfirm,
      buttonQuite
    );

    channel.send({
      content:
        "Faça a verificação com seu e-mail utilizado na compra do curso.",
      components: [row],
    });
  },
};
