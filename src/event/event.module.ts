import { Module } from '@nestjs/common';
import { EventResolvers } from './event.resolvers';
import { EventService } from './event.service';
import {DateScalar} from "../common/date.scalar";
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';
@Module({
  imports :[TypeOrmModule.forFeature([EventEntity])],
  providers: [EventService, EventResolvers,DateScalar],
  
})
export class EventModule {}