import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Customer } from '../graphql.schema';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { AuthGuard } from '@nestjs/passport';
import {GqlAuthGuard} from "../auth/gqlAuth";
const pubSub = new PubSub();

@UseGuards(GqlAuthGuard)
@Resolver('Customer')
export class CustomerResolvers {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(AuthGuard('jwt'))
  @Query()
  async getCustomers() {
    return await this.customerService.findAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Query('customer')
  async findOneById(
   
    id: string,
  ): Promise<Customer> {
    return await this.customerService.findOneById(id);
  }

  @Mutation('createCustomer')
  async create(@Args('createCustomerInput') args: CreateCustomerDto) {
    console.log(args,"mutation");
    const customerCreated = await this.customerService.create(args);
    pubSub.publish('customerCreated', { customerCreated: customerCreated });
    // return customerCreated;
  }

  @Subscription('customerCreated')
  customerCreated() {
    return pubSub.asyncIterator('customerCreated');
  }
}