"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: true,
    entities: ['src/models/*.{.ts,.js}'],
    synchronize: true,
    migrations: ['src/db/migrations/*{.ts,.js}'],
    migrationsRun: true,
    migrationsTableName: 'migrations',
});
//# sourceMappingURL=typeorm.config.js.map