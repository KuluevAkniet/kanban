import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [path.join(__dirname, './models/*.{.ts,.js}')],
  migrations: [path.join(__dirname, './*{.ts,.js}')],
  migrationsRun: true,
  useUTC: true,
});
