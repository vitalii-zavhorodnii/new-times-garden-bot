import TelegramBot from 'node-telegram-bot-api';

import { telegramBot } from './bot.telegram';

export async function handleStartBotCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;

  const link = process.env.FRONTEND_LINK;

  telegramBot.sendMessage(chatId, 'play game', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Play',
            web_app: { url: link }
          }
        ]
      ]
    }
  });
}

export async function handlePlayGameCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;

  const link = process.env.FRONTEND_LINK;

  telegramBot.sendMessage(chatId, 'play game', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Play',
            web_app: { url: link }
          }
        ]
      ]
    }
  });
}
