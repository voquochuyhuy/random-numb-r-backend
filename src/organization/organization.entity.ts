import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class OrganizationEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    organizationName: string;

    @Column()
    place: string;

}