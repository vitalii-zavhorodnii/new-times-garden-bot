import 'dotenv/config';

import { handlePlayGameCommand, handleStartBotCommand } from './bot/bot.handlers';
import { telegramBot } from './bot/bot.telegram';

telegramBot.onText(/\/start/, handleStartBotCommand);
telegramBot.onText(/\/play/, handlePlayGameCommand);

console.log('Telegram bot initiated!');
console.log(['/start', '/play']);
console.log('Serving: ' + process.env.FRONTEND_LINK);
