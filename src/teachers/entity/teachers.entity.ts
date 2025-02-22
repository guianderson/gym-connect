// src/teachers/teacher.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Gym } from '../../gyms/entities/gym.entity';
import { Workout } from '../../workouts/entity/workouts.entity';
import { Student } from '../../students/entity/students.entity';

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Gym, (gym) => gym.teachers)
    gym: Gym;

    @OneToMany(() => Workout, (workout) => workout.teacher)
    workouts: Workout[];

    @OneToMany(() => Student, (student) => student.teacher)
    students: Student[];
}