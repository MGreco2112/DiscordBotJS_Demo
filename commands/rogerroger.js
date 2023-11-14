import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder().setName('rogerroger').setDescription('Roger Roger');

export async function execute(interaction) {
    await interaction.reply('Roger Roger');
}