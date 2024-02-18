import {
  Client,
  Events,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  IntentsBitField,
  TextInputBuilder,
  TextInputStyle,
  ModalBuilder
} from "discord.js";

const createModalEmail = async (interaction) => {
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
};

const createModalCode = async (interaction) => {
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
};

const setRole = async (interaction) => {
  const role = interaction.member.guild.roles.cache.get("1207831233141153823"); // role estudante

  if (!role) {
    console.error("Essa role não existe neste servidor.");
    return;
  }

  if (!interaction.member.permissions.has("MANAGE_ROLES")) {
    console.error("I do not have permissions to manage roles.");
    return;
  }

  await interaction.member.roles.add(role);
};

export const discordbot = () => {
  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildMembers,
    ],
  });

  /**
   *
   */
  client.once(Events.ClientReady, async (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);

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
  });

  /**
   *
   */
  client.login(process.env.DISCORD_BOT_TOKEN);

  /**
   *
   */
  client.on(Events.GuildMemberAdd, async (member) => {});

  /**
   *
   */
  client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
  });

  /**
   *
   */
  client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "openModalEmail") {
        await createModalEmail(interaction);
      }

      if (interaction.customId === "openModalCode") {
        await createModalCode(interaction);
      }

      if (interaction.customId === "quiteService") {
        // interaction.member.guild.members.ban(interaction.user)
        console.log("ban");
        client.users.send(
          interaction.user.id,
          "Você foi banido devido! Contate o administrador do servidor para mais informações."
        );
      }
    }

    /**
     *
     */
    if (interaction.isModalSubmit()) {
      if (interaction.customId === "emailModal") {
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
      }

      /**
       *
       */
      if (interaction.customId === "codeModal") {
        const code = interaction.fields.getTextInputValue("code");

        console.log({ code });

        await setRole(interaction);

        await interaction.reply({
          content: "Your submission was received successfully!",
        });
      }
    }
  });
};

export default discordbot;
