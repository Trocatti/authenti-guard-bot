import { Client, MessageComponentInteraction } from 'discord.js'
import { interactionButton, interactionModal } from "./interactions"

export default {
    async execute({ interaction, client }: { interaction: MessageComponentInteraction, client: Client }) {
        if (interaction.isButton()) {
            interactionButton.execute(interaction, client)

        }

        if (interaction.isModalSubmit()) {
            interactionModal.execute(interaction)
        }

    }
}