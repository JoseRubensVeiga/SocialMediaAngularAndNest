const getBooleanEnv = (envName: string): boolean => {
  const envStrValue = process.env[envName];

  if (envStrValue === 'true') {
    return true;
  }

  if (envStrValue === 'false') {
    return false;
  }

  throw new Error(`${envName} is not a valid boolean value`);
};

const getNumberEnv = (envName: string): number => {
  const envStrValue = process.env[envName];
  const envNumberValue = Number(envStrValue);

  if (!Number.isNaN(envNumberValue)) {
    return envNumberValue;
  }

  throw new Error(`${envName} is not a valid number value`);
};

export const typeOrmConfig = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: getNumberEnv(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: getBooleanEnv('DATABASE_SYNCHRONIZE'),
  entities: [],
  extra: {
    encrypt: getBooleanEnv('DATABASE_ENCRYPT'),
    enableArithAbort: getBooleanEnv('DATABASE_ENABLE_ARITH_ABORT'),
  },
};
