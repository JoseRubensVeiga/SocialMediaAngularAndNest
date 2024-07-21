import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './@core/config/typeorm';
import { SessionsModule } from './modules/sessions/sessions.module';
import { UsersModule } from './modules/users/users.module';
import { UsersRepository } from '@repositories/users.repository';
import { UsersService } from './modules/users/users.service';

configDotenv();

@Module({
  imports: [
    SessionsModule,
    UsersModule,
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
