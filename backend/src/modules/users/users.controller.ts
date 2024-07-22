import { CreateUserDTO } from '@domain/dtos/users/requests/createUserDto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO) {
    await this.usersService.create(createUserDTO);
  }

  @Get()
  async list() {
    return await this.usersService.list();
  }
}
