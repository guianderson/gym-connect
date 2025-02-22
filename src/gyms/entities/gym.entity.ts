// src/academies/academy.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Teacher } from '../../teachers/entity/teachers.entity';
import { Student } from '../../students/entity/students.entity';

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToMany(() => Teacher, (teacher) => teacher.gym)
  teachers: Teacher[];

  @OneToMany(() => Student, (student) => student.academy)
  students: Student[];
}