const ROLE_ID = "1207831233141153823"; // role estudante

export default {
  async execute(interaction) {
    const role = interaction.member.guild.roles.cache.get(ROLE_ID);

    if (!role) {
      console.error("Essa role não existe neste servidor.");
      return;
    }

    if (!interaction.member.permissions.has("MANAGE_ROLES")) {
      console.error("I do not have permissions to manage roles.");
      return;
    }

    await interaction.member.roles.add(role);
  },
};
