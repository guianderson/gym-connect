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
import { Users } from '../../users/entity/users.entity';

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  zipCode: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

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

  @OneToMany(() => Users, (user) => user.gym)
  users: Users[];
}
