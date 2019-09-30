import { Injectable } from '@nestjs/common';
import { Policies } from './policies.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Policies) private readonly authorRepository: Repository<Policies>,
  ) { }
  async findOne(data){
    return await this.authorRepository.findOne({username:data});
  }

  async create(data){
    const policies = new Policies();
    policies.username = data.username;
    policies.role = data.role;
    return await this.authorRepository.save(policies);
  }

  async findAll(){
    return await this.authorRepository.find();
  }
  
}
