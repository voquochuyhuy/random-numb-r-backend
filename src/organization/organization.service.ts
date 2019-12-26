import { Injectable } from '@nestjs/common';
import { Organization } from '../graphql.schema';
import {OrganizationEntity} from "./organization.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganizationDto,UpdateOrganizationDto } from './dto/create-organization.dto';
@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(OrganizationEntity) private readonly organizationRepository: Repository<OrganizationEntity>,
  ) { }

  create(organization: CreateOrganizationDto) {
    this.organizationRepository.save(organization);
    // return organization;
  }

  update(organization: UpdateOrganizationDto){
    this.organizationRepository.update(organization.id,organization)
  }

  delete(organizationid){
    this.organizationRepository.delete(organizationid);
  }
  findAll():Promise<OrganizationEntity[]>  {
    return this.organizationRepository.find();
  }

  async findOneById(_id: number): Promise<OrganizationEntity> {
    return await this.organizationRepository.findOne({id:_id});
  }
}