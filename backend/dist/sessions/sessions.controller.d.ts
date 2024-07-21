import { SessionsService } from './sessions.service';
import { CreateSessionDTO } from 'src/@core/domain/dtos/sessions/requests/CreateSessionDTO';
export declare class SessionsController {
    private readonly sessionsService;
    constructor(sessionsService: SessionsService);
    create(createSessionDTO: CreateSessionDTO): any;
}
