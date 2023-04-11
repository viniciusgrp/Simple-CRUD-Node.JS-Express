import { Properties } from './propertiesEntity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    name: string

    @OneToMany(() => Properties, properties => properties.category)
    properties: Properties
}