import { ParseIntPipe, UseGuards , HttpException, HttpStatus} from '@nestjs/common';
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
    id: number,
  ) {
    return await this.statisticalService.findOneById(id);
  }

  @Mutation('createStatistical')
  async create(@Args('createStatisticalInput') args: CreateStatisticalDto) {
    if(args.cost  === null || args.eventName === null ||  args.note === null ||  args.numberOfParticipants === null ||  args.revenue === null ){
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    }
    const statisticalCreated = await this.statisticalService.create(args);
    pubSub.publish('statisticalCreated', { statisticalCreated: statisticalCreated });
    return statisticalCreated;
  }

  @Mutation('updateStatistical')
  async update(@Args('updateStatisticalInput') args){
    const statisticalUpdated = await this.statisticalService.update(args);
    return statisticalUpdated;
  }

  @Mutation('deleteStatistical')
  async delete(@Args('deleteStatisticalInput') args){
    console.log(args)
    const statisticalUpdated = await this.statisticalService.delete(args);
    return statisticalUpdated;
  }


  @Subscription('StatisticalCreated')
  StatisticalCreated() {
    return pubSub.asyncIterator('StatisticalCreated');
  }
}