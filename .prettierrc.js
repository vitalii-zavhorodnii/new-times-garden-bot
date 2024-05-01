module.exports = {
  printWidth: 85,
  tabWidth: 2,
  trailingComma: 'none',
  singleQuote: true,
  semi: true,
  importOrder: [
    '(^dotenv\\w*)|(^node-telegram\\w*)',
    '<THIRD_PARTY_MODULES>',
    '(^@bot.*?$)|(\\w*\\./bot\\w*)',
    '\\w*\\.module|\\.controller|\\.service\\w*',
    '\\w*\\.schema\\w*',
    '\\w*\\.helper|\\.filter|\\.guard\\w*',
    '\\w*\\.dto\\w*',
    '\\w*\\.constants\\w*',
    '^@bot/bot.connect-wallet-menu.*?$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy']
};
