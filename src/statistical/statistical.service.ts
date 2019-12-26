import { Injectable } from '@nestjs/common';
import { Statistical } from '../graphql.schema';
import { StatisticalEntity } from './statistical.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStatisticalDto,UpdateStatisticalDto } from './dto/create-statistical.dto';
@Injectable()
export class StatisticalService {
  constructor(
    @InjectRepository(StatisticalEntity) private readonly organizationRepository: Repository<StatisticalEntity>,
  ) { }
  
  create(event: CreateStatisticalDto) {
    this.organizationRepository.save(event);
    
  }

  update(organization: UpdateStatisticalDto){
    // console.log(organization)
    this.organizationRepository.update(organization.id,organization)
  }

  delete(organizationid){
    this.organizationRepository.delete(organizationid);
  }

  findAll():Promise<StatisticalEntity[]> {
    return this.organizationRepository.find();
  }

  findOneById(_id: number): Promise<StatisticalEntity> {
    return this.organizationRepository.findOne({id :_id});
  }
}