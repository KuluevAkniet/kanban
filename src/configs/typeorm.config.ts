import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
new ConfigService();
export default new DataSource({
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
