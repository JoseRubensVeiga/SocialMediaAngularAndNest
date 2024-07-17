import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import { typeOrmConfig } from './@core/database/config';

configDotenv();

@Module({
  imports: [SessionsModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
