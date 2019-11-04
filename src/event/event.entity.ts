import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class EventEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    eventName: string;

    @Column()
    place: string;

    @Column()
    time: Date;
}