import * as TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_TOKEN;

export const telegramBot = new TelegramBot(token, { polling: true });
