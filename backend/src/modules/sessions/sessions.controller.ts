import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SessionsService } from './sessions.service';
import { CreateSessionDTO } from '@domain/dtos/sessions/requests/CreateSessionDTO';

@ApiTags('Sessions')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Body() createSessionDTO: CreateSessionDTO): any {
    return this.sessionsService.create(createSessionDTO);
  }
}
