import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';

configDotenv();

@Module({
  imports: [
    SessionsModule,
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      entities: [],
      extra: {
        encrypt: process.env.DATABASE_ENCRYPT === 'true',
        enableArithAbort: process.env.DATABASE_ENABLE_ARITH_ABORT === 'true',
      },
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
