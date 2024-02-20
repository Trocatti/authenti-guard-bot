import { GuildMember, Interaction, PermissionsBitField } from "discord.js";

const ROLE_ID = "1207831233141153823"; // role estudante

export default {
  async execute(interaction: Interaction) {
    const member: GuildMember = interaction.member as GuildMember
    const role = member.guild.roles.cache.get(ROLE_ID);

    if (!role) {
      console.error("This role does not exists on this server."); // Essa role não existe neste servidor.
      return;
    }

    if (!member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      console.error("I do not have permissions to manage roles.");
      return;
    }

    await member.roles.add(role);
  },
};
