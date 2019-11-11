import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Statistical } from '../graphql.schema';
import { StatisticalService } from './statistical.service';
import { CreateStatisticalDto } from './dto/create-statistical.dto';
import {GqlAuthGuard} from "../auth/gqlAuth";
const pubSub = new PubSub();

@UseGuards(GqlAuthGuard)
@Resolver('Statistical')
export class StatisticalResolvers {
  constructor(private readonly statisticalService: StatisticalService) {}

  @Query()
  async getStatisticals() {
    return await this.statisticalService.findAll();
  }

  @Query('statistical')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: string,
  ) {
    return await this.statisticalService.findOneById(id);
  }

  @Mutation('createStatistical')
  async create(@Args('createStatisticalInput') args: CreateStatisticalDto) {
    const statisticalCreated = await this.statisticalService.create(args);
    pubSub.publish('statisticalCreated', { statisticalCreated: statisticalCreated });
    return statisticalCreated;
  }

  @Subscription('StatisticalCreated')
  StatisticalCreated() {
    return pubSub.asyncIterator('StatisticalCreated');
  }
}