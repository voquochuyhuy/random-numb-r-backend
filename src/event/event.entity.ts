import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventName: string;

    @Column()
    organizationName: string;

    @Column()
    place: string;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;
}