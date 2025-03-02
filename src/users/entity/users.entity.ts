import { UserType } from '../../enums/userType.enum';
import { Gym } from '../../gyms/entities/gym.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

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
  password: string;

  @Column()
  userType: UserType;

  @ManyToOne(() => Gym, (gym) => gym.id)
  gym: Gym[];

  @Column()
  gymId: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
