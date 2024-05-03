import TelegramBot from 'node-telegram-bot-api';

import { telegramBot } from './bot.telegram';

export async function handleStartBotCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;

  const link = process.env.FRONTEND_LINK;

  telegramBot.sendMessage(chatId, 'Start your garden!', {
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

  const link = `${process.env.FRONTEND_LINK}/telegram/preview.jpg`;

  telegramBot.sendPhoto(chatId, link);
  telegramBot.sendMessage(
    chatId,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga praesentium provident quaerat numquam quos qui! Illum delectus dolore, architecto dolor accusamus, expedita laudantium reprehenderit, maiores vel esse eius quam.',
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Play',
              web_app: { url: process.env.FRONTEND_LINK }
            }
          ]
        ]
      }
    }
  );
}

export async function handlePublicCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;
}

export async function handleInfoCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;
}
