// src/workouts/dto/create-workout.dto.ts

import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  teacherId: number; // ID do professor que criou o treino

  studentId?: number; // ID do aluno (opcional, caso o treino seja de grupo)
}