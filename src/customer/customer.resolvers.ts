import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Customer } from '../graphql.schema';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

const pubSub = new PubSub();

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

  @Mutation('createCustomer')
  async create(@Args('createcustomerInput') args: CreateCustomerDto) {
    const customerCreated = await this.customerService.create(args);
    pubSub.publish('customerCreated', { customerCreated: customerCreated });
    // return customerCreated;
  }

  @Subscription('customerCreated')
  customerCreated() {
    return pubSub.asyncIterator('customerCreated');
  }
}