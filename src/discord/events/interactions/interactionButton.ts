import { ButtonInteraction, CacheType, Client } from 'discord.js';
import interactionModal from "./interactionModal";

export default {
  async execute(interaction: ButtonInteraction<CacheType>, client: Client) {
    // console.log()
    if (interaction.customId === "openModalEmail") {
      await interactionModal.createModalEmail(interaction);
    }

    if (interaction.customId === "openModalCode") {
      await interactionModal.createModalCode(interaction);
    }

    if (interaction.customId === "quiteService") {
      // interaction.member.guild.members.ban(interaction.user)
      console.log("ban");
      client.users.send(
        interaction.user.id,
        "Você foi banido devido! Contate o administrador do servidor para mais informações."
      );
    }
  },
};
