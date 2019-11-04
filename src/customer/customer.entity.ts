import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
   
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: number;

    @Column()
    birthday: Date;

    @Column()
    adress: string;

    @Column()
    eventname: string;

    @Column()
    checkinTime: Date;

    @Column()
    code: string;
}