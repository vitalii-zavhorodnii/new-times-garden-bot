import * as TelegramBot from 'node-telegram-bot-api';

import { telegramBot } from './bot.telegram';

const communityImg = `${process.env.FRONTEND_LINK}/telegram/public-preview.png`;
const communityBtn = '📬 Read in Telegram';
const communityLink = 'https://t.me/newtimesgarden';
const communityDescription =
  '*Join Garden Community* 🥕 \n\nKeep in touch last news and patch notes, watch for important updates and more. 💐 \n\n🌻 *Stay tuned!*';

const gameImg = `${process.env.FRONTEND_LINK}/telegram/game-preview.jpg`;
const gameBtn = '🕹 Play in Telegram';
const gameLink = process.env.FRONTEND_LINK;
const gameDescription =
  '🌻 `New Times Garden` \n\n_Dive into a world of botanical wonders! 🌸 Plant, care, nurture, and watch your garden flourish._ 💐 \n\n🥕 *Join now!*';

export async function handleStartBotCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;

  telegramBot.sendPhoto(chatId, gameImg, {
    caption: gameDescription,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: gameBtn,
            web_app: { url: gameLink }
          }
        ],
        [
          {
            text: communityBtn,
            url: communityLink
          }
        ]
      ]
    }
  });
}

export async function handlePlayGameCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;

  telegramBot.sendPhoto(chatId, gameImg, {
    caption: gameDescription,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: gameBtn,
            web_app: { url: gameLink }
          }
        ]
      ]
    }
  });
}

export async function handlePublicCommand(msg: TelegramBot.Message) {
  const chatId = msg.chat.id;

  telegramBot.sendPhoto(chatId, communityImg, {
    caption: communityDescription,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: communityBtn,
            url: communityLink
          }
        ]
      ]
    }
  });
}
