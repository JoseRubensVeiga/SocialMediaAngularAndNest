import { CreateSessionDTO } from 'src/@core/domain/dtos/sessions/requests/CreateSessionDTO';
import { JwtResponse } from 'src/@core/domain/dtos/sessions/responses/JwtResponse';
export declare class SessionsService {
    create(createSessionDTO: CreateSessionDTO): JwtResponse;
}
