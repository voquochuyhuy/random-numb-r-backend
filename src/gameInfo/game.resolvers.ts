// import { ParseIntPipe, UseGuards } from '@nestjs/common';
// import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
// import { Event } from '../graphql.schema';
// import { EventGuard } from './event.guard';
// import { EventService } from './event.service';
// import { CreateEventDto } from './dto/create-event.dto';

// const pubSub = new PubSub();

// @Resolver('Event')
// export class EventResolvers {
//   constructor(private readonly eventService: EventService) {}

//   @Query()
//   @UseGuards(EventGuard)
//   async getEvent() {
//     return await this.eventService.findAll();
//   }

//   @Query('event')
//   async findOneById(
//     @Args('id', ParseIntPipe)
//     id: number,
//   ): Promise<Event> {
//     return await this.eventService.findOneById(id);
//   }

//   @Mutation('createEvent')
//   async create(@Args('createEventInput') args: CreateEventDto): Promise<Event> {
//     const eventCreated = await this.eventService.create(args);
//     pubSub.publish('eventCreated', { eventCreated: eventCreated });
//     return eventCreated;
//   }

//   @Subscription('eventCreated')
//   eventCreated() {
//     return pubSub.asyncIterator('eventCreated');
//   }
// }