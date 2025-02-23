// src/academies/academy.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { Gym } from '../../gyms/entities/gym.entity';

@Entity()
export class Plans {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    status: boolean;

    @Column()
    duration: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(() => Gym, (gym) => gym.plan)
    gyms: Gym[];
}