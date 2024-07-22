import { BadRequestException, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { addDays } from 'date-fns';
import { UsersRepository } from '@repositories/users.repository';
import { CreateSessionDTO } from '@domain/dtos/sessions/requests/CreateSessionDTO';
import * as bcrypt from 'bcrypt';
import { JwtResponse } from '@domain/dtos/sessions/responses/JwtResponse';

@Injectable()
export class SessionsService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createSessionDTO: CreateSessionDTO): Promise<JwtResponse> {
    const secret = process.env.JWT_SECRET;

    const user = await this.usersRepository.findOneBy({
      email: createSessionDTO.email,
    });

    if (!user) {
      throw new BadRequestException('Invalid credentials.');
    }

    // TODO - ENCRYPT PASSWORD

    const isPasswordCorrect = await bcrypt.compare(
      createSessionDTO.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new BadRequestException('Invalid credentials.');
    }

    const accessToken = sign({ userId: user.id }, secret, { expiresIn: '1d' });

    return {
      accessToken,
      expiresIn: addDays(new Date(), 1).toISOString(),
    };
  }
}
