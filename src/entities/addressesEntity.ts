import { Properties } from './propertiesEntity';
import { Column, Entity,  JoinColumn,  OneToOne,  PrimaryGeneratedColumn } from "typeorm";

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column({nullable: true})
    number: string

    @Column()
    city: string

    @Column()
    state: string
}