import { Injectable } from '@nestjs/common';
import { Statistical } from '../graphql.schema';
import { StatisticalEntity } from './statistical.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStatisticalDto } from './dto/create-statistical.dto';
@Injectable()
export class StatisticalService {
  constructor(
    @InjectRepository(StatisticalEntity) private readonly organizationRepository: Repository<StatisticalEntity>,
  ) { }
  
  create(event: CreateStatisticalDto) {
    this.organizationRepository.save(event);
    
  }

  findAll():Promise<StatisticalEntity[]> {
    return this.organizationRepository.find();
  }

  findOneById(_id: string): Promise<StatisticalEntity> {
    return this.organizationRepository.findOne({id :_id});
  }
}