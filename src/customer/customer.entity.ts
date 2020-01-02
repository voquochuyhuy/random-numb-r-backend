import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
   
    @PrimaryGeneratedColumn()
    id: string;


    @Column()
    idNumber: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    birthday: Date;

    @Column()
    adress: string;

    @Column()
    job: string;

    @Column()
    email: string;

    @Column()
    code: string;

    @Column()
    eventName: string;


}