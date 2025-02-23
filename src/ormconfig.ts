import { DataSource } from "typeorm";
import { Gym } from "./gyms/entities/gym.entity";
import { Teacher } from "./teachers/entity/teachers.entity";
import { Student } from "./students/entity/students.entity";
import { Workout } from "./workouts/entity/workouts.entity";
import { Plans } from "./plans/entity/plans.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Gym, Teacher, Student, Workout, Plans],
  migrations: [__dirname + "/migrations/*.ts"],  // caminho para suas migrações
  subscribers: [],
});
