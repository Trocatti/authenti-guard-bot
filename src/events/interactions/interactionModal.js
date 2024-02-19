import { ActionRowBuilder, ButtonBuilder, ModalBuilder, TextInputBuilder } from "discord.js";
import roleManager from "../roleManager";

export default {
  async createModalEmail(interaction) {
    const modal = new ModalBuilder()
      .setCustomId("emailModal")
      .setTitle("AuthentiGuard");

    const email = new TextInputBuilder()
      .setCustomId("email")
      .setLabel("Qual seu e-mail?")
      .setStyle(TextInputStyle.Short)
      .setPlaceholder("Informe seu e-mail")
      .setRequired(true)
      .setMinLength(10)
      .setMaxLength(254);

    const firstActionRow = new ActionRowBuilder().addComponents(email);

    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);
  },

  async createModalCode(interaction) {
    const modal = new ModalBuilder()
      .setCustomId("codeModal")
      .setTitle("AuthentiGuard");

    const email = new TextInputBuilder()
      .setCustomId("code")
      .setLabel("Informe o código enviado no seu e-mail")
      .setStyle(TextInputStyle.Short)
      .setPlaceholder("Informe o código!")
      .setMinLength(8)
      .setMaxLength(8)
      .setRequired(true);

    const firstActionRow = new ActionRowBuilder().addComponents(email);

    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);
  },

  async getEmail(interaction) {
    const email = interaction.fields.getTextInputValue("email");

    console.log({ email });

    const buttonConfirm = new ButtonBuilder()
      .setCustomId("openModalCode")
      .setLabel("Inserir código")
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(buttonConfirm);

    await interaction.reply({
      content: "Enviamos um código para o e-mail informado.",
      components: [row],
    });
  },

  async getCode(interaction) {
    const code = interaction.fields.getTextInputValue("code");

    console.log({ code });

    await roleManager.execute(interaction);

    await interaction.reply({
      content: "Your submission was received successfully!",
    });
  },

  async execute(interaction) {
    if (interaction.customId === "emailModal") {
      await this.getEmail(interaction);
    }

    if (interaction.customId === "codeModal") {
      await this.getCode(interaction);
    }
  },
};
