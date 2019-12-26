import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrganizationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organizationName: string;

    @Column()
    place: string;

    @Column()
    hotline : string;

}