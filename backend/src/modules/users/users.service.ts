import { CreateUserDTO } from '@domain/dtos/users/requests/createUserDto';
import { User } from '@domain/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@repositories/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDTO: CreateUserDTO): Promise<void> {
    const user = this.usersRepository.create();

    user.name = createUserDTO.name;
    user.profileUrl = createUserDTO.profileUrl;
    user.email = createUserDTO.email;
    user.password = await bcrypt.hash(createUserDTO.password, 10);

    this.usersRepository.save(user);
  }

  async list(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}
