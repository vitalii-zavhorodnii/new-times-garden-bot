import 'dotenv/config';

import {
  handlePlayGameCommand,
  handlePublicCommand,
  handleStartBotCommand
} from './bot/bot.handlers';
import { telegramBot } from './bot/bot.telegram';

telegramBot.onText(/\/start/, handleStartBotCommand);
telegramBot.onText(/\/play/, handlePlayGameCommand);
telegramBot.onText(/\/public/, handlePublicCommand);

(async () => {
  const commands = await telegramBot.getMyCommands();

  telegramBot.setMyCommands(commands);
})();

console.log('Telegram bot initiated!');
console.log(['/start', '/play']);
console.log('Serving: ' + process.env.FRONTEND_LINK);
