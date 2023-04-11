import { Properties } from './propertiesEntity';
import { User } from './userEntity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('schedule_users_properties')
export class Schedules_Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'date' })
    date: string

    @Column({type: 'time'})
    hour: string

    @ManyToOne(() => User,user => user.id) @JoinColumn()
    users: User

    @ManyToOne(() => Properties, properties => properties.id) @JoinColumn()
    property: Properties
}