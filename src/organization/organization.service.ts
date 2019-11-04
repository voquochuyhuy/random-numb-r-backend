import { Injectable } from '@nestjs/common';
import { Organization } from '../graphql.schema';
import {OrganizationEntity} from "./organization.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(OrganizationEntity) private readonly organizationRepository: Repository<OrganizationEntity>,
  ) { }

  create(organization: CreateOrganizationDto) {
    this.organizationRepository.save(organization);
    // return organization;
  }

  findAll():Promise<OrganizationEntity[]>  {
    return this.organizationRepository.find();
  }

  async findOneById(_id: string): Promise<OrganizationEntity> {
    return await this.organizationRepository.findOne({id:_id});
  }
}