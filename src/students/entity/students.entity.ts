// src/students/student.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Gym } from '../../gyms/entities/gym.entity';
import { Workout } from '../../workouts/entity/workouts.entity';
import { Teacher } from '../../teachers/entity/teachers.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Gym, (gym) => gym.students)
  academy: Gym;

  @ManyToOne(() => Teacher, (teacher) => teacher.students)
  teacher: Teacher;

  @OneToMany(() => Workout, (workout) => workout.student)
  workouts: Workout[];
}