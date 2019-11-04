import { Module } from '@nestjs/common';

import { CustomerService } from './customer.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { CustomerResolvers } from './customer.resolvers';
import {DateScalar} from "../common/date.scalar";

@Module({
  imports :[TypeOrmModule.forFeature([CustomerEntity])],
  providers: [CustomerService, CustomerResolvers,DateScalar],

})
export class CustomerModule {}