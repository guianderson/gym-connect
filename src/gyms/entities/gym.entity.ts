// src/academies/academy.entity.ts

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Plans } from '../../plans/entity/plans.entity';
import { Teacher } from '../../teachers/entity/teachers.entity';
import { Student } from '../../students/entity/students.entity';

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  zipCode: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  number: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  status: boolean;

  @Column({ type: 'text' })
  image?: string | null;

  @Column()
  planId: number;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Plans, (plan) => plan.gyms)
  plan: Plans;

  @OneToMany(() => Teacher, (teacher) => teacher.gym)
  teachers: Teacher[];

  @OneToMany(() => Student, (student) => student.academy)
  students: Student[];
}
