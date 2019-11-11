import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
   
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    birthday: Date;

    @Column()
    adress: string;

    @Column()
    eventName: string;

    @Column()
    checkinTime: Date;

    @Column()
    code: string;
}