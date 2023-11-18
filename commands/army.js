//CODE FROM DISCORD'S AI CLYDE
import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('army')
    .setDescription('Deploy Army');

    
export async function execute(interaction) {
    await interaction.reply('Posting an image...');
    const channel = interaction.channel;
    await channel.send({ files: ["https://lumiere-a.akamaihd.net/v1/images/battledroids_d036e015.jpeg?region=0%2C0%2C800%2C600"] });
}
