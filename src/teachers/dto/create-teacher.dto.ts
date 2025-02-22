// src/teachers/dto/create-teacher.dto.ts

import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  gymId: number; // ID do gym
}