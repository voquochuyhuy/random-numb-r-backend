import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Customer } from '../graphql.schema';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { AuthGuard } from '@nestjs/passport';
import {GqlAuthGuard} from "../auth/gqlAuth";
import { CustomerEntity } from './customer.entity';
const pubSub = new PubSub();

@UseGuards(GqlAuthGuard)
@Resolver('Customer')
export class CustomerResolvers {
  constructor(private readonly customerService: CustomerService) {}

 
  @Query()
  async getCustomers() {
    return await this.customerService.findAll();
  }
 
  @Query('customer')
  async findOneById(
   
    id: string,
  ): Promise<Customer> {
    return await this.customerService.findOneById(id);
  }

  @Query('getCustomerByEvent')
  async findByEvent(@Args('eventName') eventName:string):Promise<CustomerEntity[]>{
    
    return  await this.customerService.findByEvent(eventName);
  }

  @Mutation('createCustomer')
  async create(@Args('createCustomerInput') args: CreateCustomerDto) {
    
    const customerCreated = await this.customerService.create(args);
    pubSub.publish('customerCreated', { customerCreated: customerCreated });
    // return customerCreated;
  }

  @Subscription('customerCreated')
  customerCreated() {
    return pubSub.asyncIterator('customerCreated');
  }
}