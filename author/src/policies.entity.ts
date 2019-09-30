import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Policies {
    @PrimaryColumn()
    username: string;

    @Column()
    role: string;

    
}