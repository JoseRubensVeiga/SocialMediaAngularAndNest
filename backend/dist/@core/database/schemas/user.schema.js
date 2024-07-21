"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
const typeorm_1 = require("typeorm");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'User',
    target: user_entity_1.User,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
});
//# sourceMappingURL=user.schema.js.map