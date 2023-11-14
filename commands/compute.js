import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder().setName('compute').setDescription('That does not compute');

export async function execute(interaction) {
    await interaction.reply('That does not compute');
}