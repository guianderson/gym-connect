import { DataSource } from "typeorm";
import { Gym } from "./gyms/entities/gym.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Gym],
  migrations: [__dirname + "/migrations/*.ts"],  // caminho para suas migrações
  subscribers: [],
});
