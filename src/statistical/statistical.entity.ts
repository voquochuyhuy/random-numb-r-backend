import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StatisticalEntity {
    @PrimaryGeneratedColumn()
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
    note: String;
}