"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsersTable1721574222733 = void 0;
const typeorm_1 = require("typeorm");
class AddUsersTable1721574222733 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'profileUrl',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        queryRunner.dropTable('users');
    }
}
exports.AddUsersTable1721574222733 = AddUsersTable1721574222733;
//# sourceMappingURL=1721574222733-add_users_table.js.map