import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder().setName('programming').setDescription("As well, it's my programming");

export async function execute(interaction) {
    await interaction.reply("As well, it's my programming");
}