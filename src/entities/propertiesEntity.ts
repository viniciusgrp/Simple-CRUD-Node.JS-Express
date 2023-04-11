import { Schedules_Users } from './schedules_users_properties_Entity';
import { Category } from './categoryEntity';
import { Address } from './addressesEntity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('properties')
export class Properties {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({default: false})
    sold: boolean

    @Column({ type: 'decimal' })
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address) 
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, category => category.id)
    category: Category

    @OneToMany(() => Schedules_Users, schedules => schedules.property)
    schedules: Schedules_Users
}