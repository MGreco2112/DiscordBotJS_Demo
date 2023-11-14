import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder().setName('jedi').setDescription('Die, Jedi Dogs!');

export async function execute(interaction) {
    await interaction.reply('Die, Jedi Dogs!');
}