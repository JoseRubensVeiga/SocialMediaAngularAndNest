import { CreateUserDTO } from '@domain/dtos/users/requests/createUserDto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    this.usersService.create(createUserDTO);
  }

  @Get()
  async list() {
    return await this.usersService.list();
  }
}
