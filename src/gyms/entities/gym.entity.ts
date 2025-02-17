import { nanoid } from "nanoid";
import { 
    Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, 
    BeforeInsert,
    PrimaryColumn
} from "typeorm";

@Entity('gym')
export class Gym {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
        
    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    number: string;

    @Column()
    zipcode: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    website: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date | null;

    @BeforeInsert()
    generateId() {
        this.id = `gym_${nanoid()}`;
    }
}