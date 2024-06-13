"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const path = require("path");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    entities: [path.join(__dirname, './models/*.{.ts,.js}')],
    migrations: [path.join(__dirname, './*{.ts,.js}')],
    migrationsRun: true,
    useUTC: true,
});
//# sourceMappingURL=typeorm-datasource.js.map