import { Client, MessageComponentInteraction } from 'discord.js'
import { interactionButton, interactionModal } from "./interactions"

export default {
    async execute({ client }: { client: Client }) // { interaction, client }: { interaction: MessageComponentInteraction, client: Client }
    {
        console.log(this, client)
        // if (interaction.isButton()) {
        //     interactionButton.execute(interaction, client)

        // }

        // if (interaction.isModalSubmit()) {
        //     interactionModal.execute(interaction)
        // }

    }
}