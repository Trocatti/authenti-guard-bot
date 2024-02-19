import interactionModal from "./interactionModal";

export default {
  async execute(interaction, client) {
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
