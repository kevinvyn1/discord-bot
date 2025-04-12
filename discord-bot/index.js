const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const DISCORD_TOKEN = 'MTM2MDU0NzUzMjg3ODUxMjE5Mw.GdHj6C.h3eTGIfM4vFqo6Q5GLBMV2CgjDT5fmQ-XVOo5M'; // Ganti dengan token bot yang didapat dari Discord Developer Portal

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
