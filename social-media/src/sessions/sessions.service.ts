import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionsService {
  getServices(): string[] {
    return ['Service 01', 'Service 02'];
  }
}
