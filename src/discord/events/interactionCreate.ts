import { CacheType, Interaction, Client } from 'discord.js';
import { interactionButton, interactionModal } from "./interactions"

export default {
    async execute(interaction: Interaction<CacheType>, client: Client)
    {
        if (interaction.isButton()) {
            interactionButton.execute(interaction, client)
        }

        if (interaction.isModalSubmit()) {
            interactionModal.execute(interaction)
        }

    }
}