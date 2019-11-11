import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrganizationEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    organizationName: string;

    @Column()
    place: string;

    @Column()
    hotline : string;

}