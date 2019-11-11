import { Module } from '@nestjs/common';

import { CustomerService } from './customer.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { CustomerResolvers } from './customer.resolvers';
import {DateScalar} from "../common/date.scalar";
import {JwtStrategy} from '../auth/jwt.strategy';
@Module({
  imports :[TypeOrmModule.forFeature([CustomerEntity])],
  providers: [CustomerService, CustomerResolvers,DateScalar,JwtStrategy],

})
export class CustomerModule {}