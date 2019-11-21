import { Injectable, Inject } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerEntity } from './customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity) private readonly customerRepository: Repository<CustomerEntity>,
  ) { }

  async create(dto: CreateCustomerDto): Promise<CustomerEntity> {
    console.log(dto,"dto");
    try{
      return await this.customerRepository.save(dto);
    }
    catch(error){
      console.log(error)
    }
  }

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find();
    // return [{
    //   username:"huy",
    //   id: "1",
    //   password : "21312",
    //   email :"34"
    // }];
  }
  async findOneById (_id:string):Promise<CustomerEntity>{
    return await this.customerRepository.findOne({id:_id});
  }

  async findByEvent (eventName:string):Promise<CustomerEntity[]>{
    
    return await this.customerRepository.find({eventName:eventName});
  }
}