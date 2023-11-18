import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as rogerroger from "./commands/rogerroger.js";
import * as uhoh from "./commands/uhoh.js";
import * as compute from "./commands/compute.js"
import * as programming from "./commands/programming.js";
import * as jedi from "./commands/jedi.js";
import * as army from "./commands/army.js";


config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
    console.log("Online: " + client.user.tag);
}

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) {
        return;
    }

    if (interaction.commandName === 'rogerroger') {
       await rogerroger.execute(interaction);
    }

    if (interaction.commandName === 'uhoh') {
        await uhoh.execute(interaction);
    }

    if (interaction.commandName === 'compute') {
        await compute.execute(interaction);
    }

    if (interaction.commandName === 'programming') {
        await programming.execute(interaction);
    }

    if (interaction.commandName === 'jedi') {
        await jedi.execute(interaction);
    }

    if (interaction.commandName === "army") {
        await army.execute(interaction);
    }

}

client.once(Events.ClientReady, readyDiscord);

client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handleInteraction);