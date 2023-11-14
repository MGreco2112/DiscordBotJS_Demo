import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder().setName('uhoh').setDescription('Uh oh');

export async function execute(interaction) {
    await interaction.reply('Uh oh');
}