import { PartialMessage } from 'discord.js';

export default {
    async execute({ message }: { message: PartialMessage }) {
        if (message.author.bot) return;
    }
}