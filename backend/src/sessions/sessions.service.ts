import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { addDays } from 'date-fns';
import { JwtResponse } from '../@core/domain/dtos/sessions/responses/JwtResponse';
import { CreateSessionDTO } from '../@core/domain/dtos/sessions/requests/CreateSessionDTO';

@Injectable()
export class SessionsService {
  create(createSessionDTO: CreateSessionDTO): JwtResponse {
    const secret = process.env.JWT_SECRET;
    const accessToken = sign({ userId: 1 }, secret, { expiresIn: '1d' });

    return {
      accessToken,
      expiresIn: +addDays(new Date(), 1),
    };
  }
}
