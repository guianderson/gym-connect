import { Module } from '@nestjs/common';
import { GymsModule } from './gyms/gyms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: {
        directory: 'src/migrations',
        tableName: 'migrations',
        path: 'dist/migrations/*{.ts,.js}',
      },
    }),
    GymsModule,
  ],
})
export class AppModule {}
