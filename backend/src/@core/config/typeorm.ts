import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['./src/@core/database/migrations/*.ts'],
  extra: {
    encrypt: process.env.DATABASE_ENCRYPT === 'true',
    enableArithAbort: process.env.DATABASE_ENABLE_ARITH_ABORT === 'true',
  },
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
