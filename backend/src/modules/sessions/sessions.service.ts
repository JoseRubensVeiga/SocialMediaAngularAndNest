import { BadRequestException, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { addDays } from 'date-fns';
import { UsersRepository } from '@repositories/users.repository';
import { CreateSessionDTO } from '@domain/dtos/sessions/requests/CreateSessionDTO';

@Injectable()
export class SessionsService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createSessionDTO: CreateSessionDTO): Promise<any> {
    const secret = process.env.JWT_SECRET;

    const user = await this.usersRepository.findOneBy({
      email: createSessionDTO.email,
    });

    if (!user) {
      throw new BadRequestException('Invalid credentials.');
    }

    // TODO - ENCRYPT PASSWORD
    const isPasswordCorrect = user.password === createSessionDTO.password;

    if (!isPasswordCorrect) {
      throw new BadRequestException('Invalid credentials.');
    }

    const accessToken = sign({ userId: user.id }, secret, { expiresIn: '1d' });

    return {
      accessToken,
      expiresIn: +addDays(new Date(), 1),
    };
  }
}
