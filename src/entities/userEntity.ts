import { Schedules_Users } from './schedules_users_properties_Entity';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BeforeUpdate, BeforeInsert, DeleteDateColumn, OneToMany } from "typeorm";
import { hashSync } from 'bcrypt'

@Entity('users')
export class User {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdm: boolean;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @DeleteDateColumn({nullable: true})
    deletedAt?: Date;

    @OneToMany(() => Schedules_Users, schedules => schedules.users)
    schedules: Schedules_Users

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
}