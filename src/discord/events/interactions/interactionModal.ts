import { ActionRowBuilder, ButtonBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, MessageComponentInteraction, ButtonStyle, ModalSubmitInteraction, CacheType, Interaction } from "discord.js";
import roleManager from "../roleManager";

export default {

  async execute(interaction: Interaction<CacheType>) {
    if ((interaction as ModalSubmitInteraction).customId === "emailModal") {
      await this.getEmail(interaction);
    }

    if ((interaction as ModalSubmitInteraction).customId === "codeModal") {
      await this.getCode(interaction);
    }
  },

  async createModalEmail(interaction: MessageComponentInteraction) {
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

    const firstActionRow: ActionRowBuilder<any> = new ActionRowBuilder().addComponents(email);

    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);
  },

  async createModalCode(interaction: MessageComponentInteraction) {
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

    const firstActionRow: ActionRowBuilder<any>  = new ActionRowBuilder().addComponents(email);

    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);
  },

  async getEmail(interaction: ModalSubmitInteraction) {
    const email = interaction.fields.getTextInputValue("email");

    console.log({ email });

    const buttonConfirm = new ButtonBuilder()
      .setCustomId("openModalCode")
      .setLabel("Inserir código")
      .setStyle(ButtonStyle.Primary);

    const row: ActionRowBuilder<any> = new ActionRowBuilder().addComponents(buttonConfirm);

    await interaction.reply({
      content: "Enviamos um código para o e-mail informado.",
      components: [row],
    });
  },

  async getCode(interaction: ModalSubmitInteraction) {
    const code = interaction.fields.getTextInputValue("code");

    console.log({ code });

    await roleManager.execute(interaction);

    await interaction.reply({
      content: "Your submission was received successfully!",
    });
  },

  
};
