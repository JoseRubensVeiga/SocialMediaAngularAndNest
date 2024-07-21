import { DataSource } from 'typeorm';
declare const _default: (() => {
    type: "mssql";
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    extra: {
        encrypt: boolean;
        enableArithAbort: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: "mssql";
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    extra: {
        encrypt: boolean;
        enableArithAbort: boolean;
    };
}>;
export default _default;
export declare const connectionSource: DataSource;
