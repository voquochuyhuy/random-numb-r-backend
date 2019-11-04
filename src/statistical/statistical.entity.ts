import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class StatisticalEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    eventName: string;

    @Column()
    cost: number;

    @Column()  
    numberOfParticipants: number;

    @Column()
    revenue: number;

    @Column()
    note: Date;
}