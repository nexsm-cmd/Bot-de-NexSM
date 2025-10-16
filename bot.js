const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

const TOKEN = 'MTQyODE5Njc0MzE0ODczMjQxOA.GGy2x-.EzKb-RPD6vYVGkbbsluGSAIynBAY_WfEObdeaI';
const GUILD_ID = '1182850470260248597';
const VOICE_CHANNEL_ID = '1424508244923257013';

client.once('ready', async () => {
  console.log(`Bot online como ${client.user.tag}`);

  try {
    const guild = await client.guilds.fetch(GUILD_ID);
    const channel = guild.channels.cache.get(VOICE_CHANNEL_ID);

    if (channel && channel.isVoiceBased()) {
      joinVoiceChannel({
        channelId: channel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator
      });
      console.log('Bot entrou no canal de voz!');
    } else {
      console.log('Canal de voz não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao buscar guild ou canal:', error);
  }
});

client.login(TOKEN);
