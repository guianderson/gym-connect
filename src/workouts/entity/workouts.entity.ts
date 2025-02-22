// src/workouts/workout.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Teacher } from '../../teachers/entity/teachers.entity';
import { Student } from '../../students/entity/students.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.workouts)
  teacher: Teacher;

  @ManyToOne(() => Student, (student) => student.workouts, { nullable: true })
  student: Student;
}