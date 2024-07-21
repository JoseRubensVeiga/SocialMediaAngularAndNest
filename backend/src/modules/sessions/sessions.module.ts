import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { UsersRepository } from '@repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@domain/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [SessionsController],
  providers: [SessionsService, UsersRepository],
})
export class SessionsModule {}
