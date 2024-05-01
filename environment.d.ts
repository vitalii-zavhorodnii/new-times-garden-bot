declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "dev" | "prod";
      TELEGRAM_TOKEN: string;
      FRONTEND_LINK: string;
    }
  }
}

export {};
