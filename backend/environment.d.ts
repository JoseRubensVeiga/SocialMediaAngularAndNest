declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_TYPE: 'mssql';
      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;

      DATABASE_SYNCHRONIZE: string;
      DATABASE_ENCRYPT: string;
      DATABASE_ENABLE_ARITH_ABORT: string;
    }
  }
}

export {};
