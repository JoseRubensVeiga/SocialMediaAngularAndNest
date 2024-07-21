"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const date_fns_1 = require("date-fns");
let SessionsService = class SessionsService {
    create(createSessionDTO) {
        const secret = process.env.JWT_SECRET;
        const accessToken = (0, jsonwebtoken_1.sign)({ userId: 1 }, secret, { expiresIn: '1d' });
        return {
            accessToken,
            expiresIn: +(0, date_fns_1.addDays)(new Date(), 1),
        };
    }
};
exports.SessionsService = SessionsService;
exports.SessionsService = SessionsService = __decorate([
    (0, common_1.Injectable)()
], SessionsService);
//# sourceMappingURL=sessions.service.js.map