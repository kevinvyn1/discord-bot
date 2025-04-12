const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const DISCORD_TOKEN = 'Discord-Token'; // Ganti dengan token bot yang didapat dari Discord Developer Portal

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

client.login(DISCORD_TOKEN);

// Function untuk kirim DM
async function sendDM(userId, message) {
    try {
        const user = await client.users.fetch(userId);
        await user.send(message);
    } catch (error) {
        console.error('Error sending DM:', error);
    }
}

module.exports = { sendDM };
