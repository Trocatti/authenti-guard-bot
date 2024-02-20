import { Client, PartialMessage } from 'discord.js';

export default {
    async execute({client} : {client: Client}) {
        console.log(this, client)
        // const message: PartialMessage = client
        // if (message.author.bot) return;
    }
}