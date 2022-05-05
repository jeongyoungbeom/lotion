import dotenv from 'dotenv';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  // port: 27017,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
  entities: [
  ],
  // migrations: [__dirname + '/src/migrations/*.ts'],
  // cli: { migrationsDir: 'src/migrations' },
  // autoLoadEntities: true,
  // charset: 'utf8mb4',
  // synchronize: false,
  // logging: true,
  // keepConnectionAlive: true,
};
export = config;