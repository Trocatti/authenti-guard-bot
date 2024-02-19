import { interactionButton, interactionModal } from "./interactions"

export default {
    async execute(interaction, client) {
        if (interaction.isButton()) {
            interactionButton.execute(interaction, client)
      
        }

        if (interaction.isModalSubmit()) {
            interactionModal.execute(interaction)            
        }

    }
}