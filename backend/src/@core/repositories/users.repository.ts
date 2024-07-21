import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  public async findAll(): Promise<User[]> {
    return this.find();
  }
}
