import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './@core/config/typeorm';

configDotenv();

@Module({
  imports: [
    SessionsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
