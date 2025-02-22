// src/students/dto/create-student.dto.ts

import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateStudentDto {
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

  @IsNotEmpty()
  teacherId: number; // ID do professor responsável
}